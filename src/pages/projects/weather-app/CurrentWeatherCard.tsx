import { CurrentWeatherResponse } from '@/types/Weather';
import { css } from '@emotion/react';
import { LocationIcon } from '@primer/octicons-react';

import '../../../css/weather-icons.css';

const weatherCard = css`
  border: 2px solid #333;
  margin: 12px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color: #f4f6f8;

  & > div {
    padding: 12px;
  }
`;

const weatherIcon = css`
  font-size: 100px;
  margin-right: 24px;
`;

const info = css`
  font-size: 1.3rem;
  line-height: 1.2;

  & h3 {
    color: var(--color-slate-500);
    font-size: 0.9rem;
  }
`;

const city = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  & svg {
    color: var(--color-slate-500);
  }
`;

const temp = css`
  font-size: 48px;
`;

const description = css`
  font-size: 0.8rem;
`;

type CurrentWeatherCardProps = {
  locationName?: string;
  weather: CurrentWeatherResponse;
};
export default function CurrentWeatherCard({
  weather,
  locationName,
}: CurrentWeatherCardProps) {
  console.log('weather', weather);
  return (
    <div css={weatherCard}>
      <div>
        <div css={info}>
          <h2>Current</h2>
          <div css={city}>
            <LocationIcon size={16} />
            {locationName && <h3>{locationName}</h3>}
          </div>
        </div>
        <span css={temp}>{Math.round(weather.main.temp)}&deg;F</span>
        <span css={description}>
          {weather.weather[0].description.replace(/\b\w/g, (c) =>
            c.toUpperCase(),
          )}
        </span>
      </div>
      <div>
        <i
          className={`wi wi-owm-night-${weather.weather[0].id}`}
          css={weatherIcon}
        ></i>
      </div>
    </div>
  );
}
