import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { isArray } from 'lodash';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { createdATFilter } from 'modules/common/constants';
import { UserAdminService } from 'modules/security/users/services';

export const adjustmentFilter: Filter = {
  filter: 'Total Ajustar',
  translate: true,
  type: FilterType.NUMBER,
  key: 'adjustment',
  field: 'adjustment.value',
};

export const userFilter: Filter = {
  filter: 'common:createBy',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'owner',
  field: 'owner.id',
  queryKey: USERS_LIST_KEY,
  fetchFunc: UserAdminService.search,
  labelKey: 'fullNameSearch',
  transform: (value) => {
    if (isArray(value)) {
      return new OperatorFilter({
        type: 'OR',
        filters: value?.map((id: any) => ({
          type: 'TERM',
          field: 'owner.id',
          value: id,
          objectId: true,
          isDate: false,
        })),
      })?.toQuery();
    }
    return new TermFilter({
      field: 'owner.id',
      value,
      objectId: true,
    }).toQuery();
  },
};

export const typeFilter: Filter = {
  filter: 'Tipo',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'type',
  field: 'provider.type',
  options: [
    {
      value: 'PRODUCT',
      translate: true,
      label: 'Porductor',
    },
    {
      value: 'LOGISTIC',
      translate: true,
      label: 'Logístico',
    },
    {
      value: 'CARRIER',
      translate: true,
      label: 'Transportista',
    },
  ],
  transform: (value) => {
    if (Array.isArray(value)) {
      return new OperatorFilter({
        type: 'OR',
        filters: value?.map((value: any) => ({
          type: 'TERM',
          field: 'provider.type',
          value,
        })),
      })?.toQuery();
    }
    return new TermFilter({
      field: 'provider.type',
      value,
    }).toQuery();
  },
};

export const adjustmentFilters = [adjustmentFilter, createdATFilter, userFilter, typeFilter];
