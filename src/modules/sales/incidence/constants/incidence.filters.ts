import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { userAdminFilter } from 'modules/security/users/constants/user-filters';
import { INCIDENCE_STATUS_ENUM } from './incidence-status';
import { CausesIncidenceService } from 'modules/sales/settings/causes-incidence/services';
import { CAUSES_INCIDENCES_LIST_KEY } from 'modules/sales/settings/causes-incidence/constants';
import { ORDER_REFERENCE_TYPE } from 'modules/sales/common/constants/order.enum';

export const incidenceStatusFilter: Filter = {
  filter: 'common:status',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'status',
  field: 'status',
  options: Object.keys(INCIDENCE_STATUS_ENUM).map((key) => ({
    value: key,
    translate: true,
    label: `incidence:status.${key}`,
  })),
};

export const causeFilter = {
  filter: 'incidence:fields.cause',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'cause',
  labelKey: 'name',
  field: 'cause._id',
  fetchFunc: CausesIncidenceService.search,
  fetchOption: { size: 10 },
  queryKey: CAUSES_INCIDENCES_LIST_KEY,
};

const codeFilter: Filter = {
  filter: 'incidence:fields.code',
  translate: true,
  type: FilterType.TEXT,
  key: 'code',
  field: 'code',
};

const orderCodeFilter: Filter = {
  filter: 'incidence:fields.orderCode',
  translate: true,
  type: FilterType.TEXT,
  key: 'orderCode',
  field: 'orderReference.code',
};

export const incidenceTypeFilter: Filter = {
  filter: 'incidence:fields.type',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'type',
  field: 'referenceType',
  options: Object.keys(ORDER_REFERENCE_TYPE).map((key) => ({
    value: key,
    translate: true,
    label: `incidence:type.${key}`,
  })),
};

const assignedFilter: Filter = userAdminFilter('responsible._id', 'incidence:fields.assignedTo', 'assigned');

const createdByFilter: Filter = userAdminFilter('createdBy._id', 'incidence:fields.createdBy', 'created');

export const incidenceFilters = [
  incidenceTypeFilter,
  codeFilter,
  causeFilter,
  orderCodeFilter,
  incidenceStatusFilter,
  assignedFilter,
  createdByFilter,
  createdATFilter,
];
