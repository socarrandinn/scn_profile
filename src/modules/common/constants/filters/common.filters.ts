import { DATES_OPTIONS_ENUM_ENUM, Filter, FilterType } from '@dfl/mui-admin-layout';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import MunicipalityFilter from 'modules/common/components/Address/MunicipalityFilter';
import { PROVINCES } from '@dfl/location';
import { endOfDay, startOfDay, subYears } from 'date-fns';

export const createdATFilter: Filter = {
  filter: 'common:createdAt',
  translate: true,
  type: FilterType.DATE,
  key: 'createdAt',
  field: 'createdAt',
};

const LOCATION_FIELD = 'locations';
const STATE_FIELD = 'address.state';
const MUNICIPALITY_FIELD = 'address.city';

export const getProvincesFilterByField = (field: string = STATE_FIELD) => ({
  filter: 'common:provinces',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'pv',
  field,
  options: PROVINCES.map((pv) => ({
    value: pv.state,
    label: pv.name,
  })),
});

export const getLocationFilterByField = (field: string = LOCATION_FIELD) => ({
  filter: 'common:fields.locations',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'zone',
  field,
  options: PROVINCES.map((pv) => ({
    value: pv.state,
    label: pv.name,
  })),
});

export const getMunicipalityFilterByField = (field: string = MUNICIPALITY_FIELD, stateField: string = STATE_FIELD) => ({
  type: FilterType.FIXED_LIST,
  field,
  filter: 'common:municipalities',
  translate: true,
  key: 'mun',
  Component: MunicipalityFilter,
  transform: (value: any) => {
    if (Array.isArray(value)) {
      return new OperatorFilter({
        type: 'OR',
        filters: value?.map(
          (e) =>
            new OperatorFilter({
              type: 'AND',
              filters: [
                new TermFilter({ field, value: e.slice(-2) }),
                new TermFilter({ field: stateField, value: e.slice(2, -2) }),
              ],
            }),
        ),
      });
    }
    return new OperatorFilter({
      type: 'AND',
      filters: [
        new TermFilter({ field, value: value.slice(-2) }),
        new TermFilter({ field: stateField, value: value.slice(2, -2) }),
      ],
    });
  },
});

export const provincesFilter: Filter = getProvincesFilterByField();

export const municipalitiesFilter: Filter = getMunicipalityFilterByField();

export const phoneFilter: Filter = {
  filter: 'common:phone',
  translate: true,
  type: FilterType.TEXT,
  key: 'ph',
  field: 'phone',
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
      _id: 'LAST-TWO-YEARS',
      label: 'common:dateFilter.LAST-TWO-YEARS',
      translate: true,
      name: 'common:dateFilter.LAST-TWO-YEARS',
      range: [subYears(startOfDay(new Date()), 2), endOfDay(new Date())],
    },
    {
      _id: 'LAST-THREE-YEARS',
      label: 'common:dateFilter.LAST-THREE-YEARS',
      translate: true,
      name: 'common:dateFilter.LAST-THREE-YEARS',
      range: [subYears(startOfDay(new Date()), 3), endOfDay(new Date())],
    },
    {
      _id: 'LAST-FOUR-YEARS',
      label: 'common:dateFilter.LAST-FOUR-YEARS',
      translate: true,
      name: 'common:dateFilter.LAST-FOUR-YEARS',
      range: [subYears(startOfDay(new Date()), 4), endOfDay(new Date())],
    },
  ],
};
