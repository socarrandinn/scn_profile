import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import MunicipalityFilter from 'modules/common/components/Address/MunicipalityFilter';
import { PROVINCES } from '@dfl/location';

export const createdATFilter: Filter = {
  filter: 'common:createdAt',
  translate: true,
  type: FilterType.DATE,
  key: 'createdAt',
  field: 'createdAt',
};

const STATE_FIELD = 'shipping.address.state';
const MUNICIPALITY_FIELD = 'shipping.address.municipality';

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
