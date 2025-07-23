import { useMemo } from 'react';

export function useDayOrNight(timestamp: number): 'day' | 'night' | null {
  return useMemo(() => {
    if (!timestamp) return null;

    const date = new Date(timestamp * 1000);
    const hours = date.getUTCHours();

    return hours >= 6 && hours < 18 ? 'day' : 'night';
  }, [timestamp]);
}
