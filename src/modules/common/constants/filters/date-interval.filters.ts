import { DATES_OPTIONS_ENUM_ENUM, Filter, FilterType } from '@dfl/mui-admin-layout';
import { endOfDay, startOfDay, subYears } from 'date-fns';

export enum DATES_CUSTOM_OPTIONS_ENUM {
  LAST_TWO_YEARS = 'LAST_TWO_YEARS',
  LAST_THREE_YEARS = 'LAST_THREE_YEARS',
  LAST_FOUR_YEARS = 'LAST_FOUR_YEARS',
}

export const DATES_CUSTOM_OPTIONS_VALUES: Record<string, Date[]> = {
  [DATES_CUSTOM_OPTIONS_ENUM.LAST_TWO_YEARS]: [subYears(startOfDay(new Date()), 2), endOfDay(new Date())],
  [DATES_CUSTOM_OPTIONS_ENUM.LAST_THREE_YEARS]: [subYears(startOfDay(new Date()), 3), endOfDay(new Date())],
  [DATES_CUSTOM_OPTIONS_ENUM.LAST_FOUR_YEARS]: [subYears(startOfDay(new Date()), 4), endOfDay(new Date())],
};

export const genericDateFilter: Filter = {
  translate: true,
  type: FilterType.DATE,
  filter: 'common:dateRange',
  key: 'createdAt',
  field: 'createdAt',

  options: [
    ...DATES_OPTIONS_ENUM_ENUM,
    {
      _id: DATES_CUSTOM_OPTIONS_ENUM.LAST_TWO_YEARS,
      label: `common:dateFilter.${DATES_CUSTOM_OPTIONS_ENUM.LAST_TWO_YEARS}`,
      translate: true,
      name: `common:dateFilter.${DATES_CUSTOM_OPTIONS_ENUM.LAST_TWO_YEARS}`,
      // range: DATES_CUSTOM_OPTIONS_VALUES.LAST_TWO_YEARS,
    },
    {
      _id: DATES_CUSTOM_OPTIONS_ENUM.LAST_THREE_YEARS,
      label: `common:dateFilter.${DATES_CUSTOM_OPTIONS_ENUM.LAST_THREE_YEARS}`,
      translate: true,
      name: `common:dateFilter.${DATES_CUSTOM_OPTIONS_ENUM.LAST_THREE_YEARS}`,
      // range: DATES_CUSTOM_OPTIONS_VALUES.LAST_THREE_YEARS,
    },
    {
      _id: DATES_CUSTOM_OPTIONS_ENUM.LAST_FOUR_YEARS,
      label: `common:dateFilter.${DATES_CUSTOM_OPTIONS_ENUM.LAST_FOUR_YEARS}`,
      translate: true,
      name: `common:dateFilter.${DATES_CUSTOM_OPTIONS_ENUM.LAST_FOUR_YEARS}`,
      // range: DATES_CUSTOM_OPTIONS_VALUES.LAST_FOUR_YEARS,
    },
  ],
};
