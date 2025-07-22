import PlacesSearchInput from '@/components/WeatherApp/PlacesSearchInput';
import { CurrentWeatherResponse, ForecastResponse } from '@/types/Weather';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { APIProvider } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { PiSpinnerBallBold } from 'react-icons/pi';

import CurrentWeatherCard from './CurrentWeatherCard';

const count = 7;
const units = 'imperial';

interface FetchError extends Error {
  name: string;
  status: number;
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const WeatherAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const LoadingIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  & > svg {
    width: 64px;
    height: 64px;
    animation: ${spin} 3s linear infinite;
  }
`;

const weatherApiKey = import.meta.env.VITE_OWM_API_KEY;

const fetchWeather = async (
  location: google.maps.LatLng,
): Promise<CurrentWeatherResponse> => {
  const { lat, lng } = location as google.maps.LatLng;
  await new Promise((resolve) => setTimeout(resolve, 500));

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${units}&appid=${weatherApiKey}`,
  );

  if (!response.ok) {
    const error = new Error('Error Fetching Weather Data');
    (error as FetchError).status = response.status;

    throw error;
  }

  return await response.json();
};

const featchForecast = async (
  location: google.maps.LatLng,
): Promise<ForecastResponse> => {
  const { lat, lng } = location as google.maps.LatLng;
  await new Promise((resolve) => setTimeout(resolve, 500));

  const response = await fetch(
    ` https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&cnt=${count}&units=${units}&appid=${weatherApiKey}`,
  );

  if (!response.ok) {
    const error = new Error('Error Fetching Forecast Data');
    (error as FetchError).status = response.status;

    throw error;
  }

  return await response.json();
};

function weatherQueryOptions(location: google.maps.LatLng | null) {
  return queryOptions({
    queryKey: ['weather', location],
    queryFn: () => {
      if (!location) return Promise.resolve(null);

      return fetchWeather(location);
    },
    enabled: false,
    staleTime: 1000 * 60 * 5,
    throwOnError: true,
  });
}

function forecastQueryOptions(location: google.maps.LatLng | null) {
  return queryOptions({
    queryKey: ['forecast', location],
    queryFn: () => {
      if (!location) return Promise.resolve(null);

      return featchForecast(location);
    },
    enabled: false,
    staleTime: 1000 * 60 * 5,
    throwOnError: true,
  });
}

export interface PlaceRedux extends google.maps.Place {
  displayName?: string;
  formattedAddress?: string;
}

export default function WeatherApp() {
  const [location, setLocation] = useState<google.maps.LatLng | null>(null);

  const [locationName, setLocationName] = useState<string>('');

  const handlePlaceSelect = (place: PlaceRedux) => {
    if (place?.location) {
      setLocation(place.location as google.maps.LatLng);
    }

    if (place?.formattedAddress) {
      setLocationName(place.formattedAddress);
    }
  };

  const weather = useQuery(weatherQueryOptions(location));
  const forecast = useQuery(forecastQueryOptions(location));

  useEffect(() => {
    if (location) {
      weather.refetch();
      forecast.refetch();
    }
  }, [location]);

  if (weather.isFetching && !weather.data) {
    return (
      <LoadingIcon>
        <PiSpinnerBallBold />
      </LoadingIcon>
    );
  }

  return (
    <APIProvider
      version="beta"
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    >
      <WeatherAppWrapper>
        <PlacesSearchInput onPlaceSelect={handlePlaceSelect} />
        {weather.data !== null && weather.data !== undefined && (
          <CurrentWeatherCard
            weather={weather.data}
            locationName={locationName}
          />
        )}
      </WeatherAppWrapper>
    </APIProvider>
  );
}
