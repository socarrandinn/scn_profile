import { differenceInDays, endOfDay, startOfDay } from 'date-fns';
import { DATES_OPTIONS_ENUM, DATES_OPTIONS_VALUES } from '@dfl/mui-admin-layout';
import { useMemo } from 'react';

export enum INTERVAL {
  hourly = 'hourly',
  daily = 'daily',
  monthly = 'monthly',
  yearly = 'yearly',
}

export const useInterval = (value?: string) => {
  return useMemo(() => {
    if (!value) {
      return INTERVAL.daily;
    }
    switch (value) {
      case DATES_OPTIONS_ENUM.TODAY:
        return INTERVAL.hourly;
      case DATES_OPTIONS_ENUM.LAST_TWELVE_MONTHS:
      case DATES_OPTIONS_ENUM.THIS_YEAR:
        return INTERVAL.monthly;
      default: {
        const range = stringToRange(value);
        if (range) {
          const dif = differenceInDays(range[1], range[0]);
          if (!dif || dif < 6) return INTERVAL.hourly;
        }
        return INTERVAL.daily;
      }
    }
  }, [value]);
};

export const stringToRange = (value: string): Date[] | undefined => {
  if (!value) return undefined;
  const range = value.split('_');
  if (range?.length === 1 && DATES_OPTIONS_VALUES[value]) return DATES_OPTIONS_VALUES[value];

  return range?.map((d, index) => {
    if (index === 0) return startOfDay(new Date(d));
    return endOfDay(new Date(d));
  });
};
