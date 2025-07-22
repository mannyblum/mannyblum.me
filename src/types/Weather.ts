export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type ForecastDay = {
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
  weather: Weather[];
};

export type CurrentWeatherResponse = {
  coord: { lat: number; lon: number };
  weather: Weather[];
  base: 'main';
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  // visibility: "",
  // wind: "",
  // clouds: "",
  // rain: "",
  // snow: ""
};

export type ForecastResponse = {
  list: ForecastDay[];
};
