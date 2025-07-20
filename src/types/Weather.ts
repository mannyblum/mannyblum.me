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
  weather: Weather[];
  // coord: "",
  // base: "",
  // main: "",
  // visibility: "",
  // wind: "",
  // clouds: "",
  // rain: "",
  // snow: ""
};

export type ForecastResponse = {
  list: ForecastDay[];
};
