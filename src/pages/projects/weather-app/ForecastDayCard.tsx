import { useDayOrNight } from '@/hooks/useDayOrNight';
import { ForecastDay } from '@/types/Weather';
import { css } from '@emotion/react';

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dayForecastItem = css`
  border: 2px solid black;
  padding: 8px;
  border-radius: 4px;
  align-self: center;
  justify-self: center;
  text-align: center;
`;

export default function ForecastDayCard({
  dayForecast,
}: {
  dayForecast: ForecastDay;
}) {
  const day = new Date(dayForecast.dt * 1000);
  const dayName = dayNames[day.getUTCDay()];
  const timeOfDay = useDayOrNight(dayForecast.dt);

  return (
    <div css={dayForecastItem} key={dayForecast.dt}>
      <h3>{dayName}</h3>
      <i className={`wi wi-owm-${timeOfDay}-${dayForecast.weather[0].id}`}></i>
      <span>{Math.round(dayForecast.temp.day)}&deg;</span>
    </div>
  );
}
