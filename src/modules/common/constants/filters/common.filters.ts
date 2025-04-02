import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import MunicipalityFilter from 'modules/common/components/Address/MunicipalityFilter';
import { provinces } from '../state-codes';
import { AddressService } from 'modules/common/service';
import { ADDRESS_STATE_LIST_KEY } from '../address.queries';
import { transformWhitObjectId } from '../object-id';

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

export const getProvincesFilterByField = (field: string = STATE_FIELD): Filter => ({
  filter: 'common:provinces',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'pv',
  field,
  fetchFunc: AddressService.searchState,
  labelKey: 'name',
  fetchOption: { size: 10 },
  queryKey: ADDRESS_STATE_LIST_KEY,
  valueKey: 'code',
  mapEntities: (rows) => rows?.map((row) => ({ ...row, label: row?.name, value: String(row?.code) })),
});

export const getLocationFilterByField = (field: string = LOCATION_FIELD) => ({
  filter: 'common:fields.locations',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'zone',
  field,
  options: provinces?.map((pv) => ({
    value: String(pv?.code),
    label: pv?.name,
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

export const STATUS: Record<string, string> = {
  ACTIVE: 'true',
  INACTIVE: 'false',
};

export const getVisibleFilter = (field?: string, header?: string) => ({
  filter: header || 'common:fields.visible.title',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'visible',
  field: field || 'visible',
  transform: (value: any) => {
    if (Array.isArray(value)) return undefined;
    return new TermFilter({ field: field || 'visible', value });
  },
  options: Object.keys(STATUS).map((key) => ({
    value: STATUS[key],
    translate: true,
    label: `common:fields.visible.${key.toLocaleLowerCase()}`,
  })),
});
