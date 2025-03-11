import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { createdATFilter } from 'modules/common/constants';
import { UserAdminService } from 'modules/security/users/services';
import { transformFilterNumber, transformWhitObjectId } from 'modules/common/constants/object-id';
import { ConciliationAdjustmentCausesService } from '../../conciliation-adjustment-causes/services';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';
import { CONCILIATION_ADJUSTMENT_CAUSES_LIST_KEY } from '../../conciliation-adjustment-causes/constants';

export const totalAmountFilter: Filter = {
  filter: 'reconciliationAdjustment:fields.totalAmount',
  translate: true,
  type: FilterType.NUMBER,
  key: 'totalAmount',
  field: 'totalAmount',
  transform: (value) => transformFilterNumber(value, 'totalAmount'),
};

export const userFilter: Filter = {
  filter: 'common:createdBy',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'owner',
  field: 'owner',
  queryKey: USERS_LIST_KEY,
  fetchFunc: UserAdminService.searchRootsUsers,
  labelKey: 'fullName',
  fetchOption: { size: 10 },
  transform: (value) => transformWhitObjectId(value, 'owner'),
};
export const adjustmentCauseFilter: Filter = {
  filter: 'reconciliationAdjustment:fields.causeAdjustment',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'causeAdjustment',
  field: 'causeAdjustment._id',
  queryKey: CONCILIATION_ADJUSTMENT_CAUSES_LIST_KEY,
  fetchFunc: ConciliationAdjustmentCausesService.search,
  labelKey: 'name',
  fetchOption: { size: 10 },
  transform: (value) => transformWhitObjectId(value, 'causeAdjustment._id'),
};

export const providerTypeFilter: Filter = {
  filter: 'reconciliationAdjustment:fields.providerType',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'type',
  field: 'providerType',
  options: [
    {
      value: PROVIDER_TYPE_ENUM.SUPPLIER,
      translate: true,
      label: `reconciliationAdjustment:providerType.${PROVIDER_TYPE_ENUM.SUPPLIER}`,
    },
    {
      value: PROVIDER_TYPE_ENUM.LOGISTIC,
      translate: true,
      label: `reconciliationAdjustment:providerType.${PROVIDER_TYPE_ENUM.LOGISTIC}`,
    },
    /* {
      value: PROVIDER_TYPE_ENUM.CARRIER,
      translate: true,
      label: `reconciliationAdjustment:providerType.${PROVIDER_TYPE_ENUM.CARRIER}`,
    }, */
  ],
};

export const adjustmentFilters = [
  providerTypeFilter,
  adjustmentCauseFilter,
  totalAmountFilter,
  userFilter,
  createdATFilter,
];
