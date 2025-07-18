import PlacesSearchInput from '@/components/WeatherApp/PlacesSearchInput';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

export default function WeatherApp() {
  const handlePlaceSelect = (place: google.maps.Place) => {
    console.log('selected', place);
  };

  return (
    <APIProvider
      version="beta"
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    >
      <PlacesSearchInput onPlaceSelect={handlePlaceSelect} />
    </APIProvider>
  );
}
