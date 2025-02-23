import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { createdATFilter } from 'modules/common/constants';
import { UserAdminService } from 'modules/security/users/services';
import { transformWhitObjectId } from 'modules/common/constants/object-id';
import { ConciliationAdjustmentCausesService } from '../../conciliation-adjustment-causes/services';

export const totalAmountFilter: Filter = {
  filter: 'reconciliationAdjustment:fields.totalAmount',
  translate: true,
  type: FilterType.NUMBER,
  key: 'totalAmount',
  field: 'totalAmount',
};

export const userFilter: Filter = {
  filter: 'common:createdBy',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'owner',
  field: 'owner',
  queryKey: USERS_LIST_KEY,
  fetchFunc: UserAdminService.search,
  labelKey: 'fullName',
  fetchOption: { size: 10 },
  transform: (value) => transformWhitObjectId(value, 'owner'),
};
export const adjustmentCauseFilter: Filter = {
  filter: 'reconciliationAdjustment:fields.causeAdjustment',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'causeAdjustment',
  field: 'causeAdjustment',
  queryKey: USERS_LIST_KEY,
  fetchFunc: ConciliationAdjustmentCausesService.search,
  labelKey: 'name',
  fetchOption: { size: 10 },
  transform: (value) => transformWhitObjectId(value, 'causeAdjustment'),
};

export const providerTypeFilter: Filter = {
  filter: 'reconciliationAdjustment:fields.providerType',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'type',
  field: 'providerType',
  options: [
    {
      value: 'PRODUCT',
      translate: true,
      label: 'reconciliationAdjustment:providerType.SUPPLIER',
    },
    {
      value: 'LOGISTIC',
      translate: true,
      label: 'reconciliationAdjustment:providerType.LOGISTIC',
    },
    {
      value: 'CARRIER',
      translate: true,
      label: 'reconciliationAdjustment:providerType.CARRIER',
    },
  ],
};

export const adjustmentFilters = [
  providerTypeFilter,
  adjustmentCauseFilter,
  totalAmountFilter,
  userFilter,
  createdATFilter,
];
