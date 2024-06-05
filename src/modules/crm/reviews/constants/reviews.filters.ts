import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { REVIEW_REPORT_CAUSES_LIST_KEY } from './reviews.queries';
import { ReportCauseService } from 'modules/crm/report-cause/services';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCT_LIST_KEY } from 'modules/inventory/product/constants/query-keys';
import { UserService } from 'modules/security/users/services';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';

export const reportCauseFilter: Filter = {
  filter: 'reportCause:fields:cause',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'type',
  labelKey: 'name',
  field: 'type',
  fetchFunc: ReportCauseService.search,
  fetchOption: { size: 10 },
  queryKey: REVIEW_REPORT_CAUSES_LIST_KEY,
};

export const productFilter: Filter = {
  filter: 'common:product',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'prod',
  labelKey: 'name',
  field: 'entity',
  fetchFunc: ProductService.search,
  fetchOption: { size: 10 },
  queryKey: PRODUCT_LIST_KEY,
};

export const clientFilter: Filter = {
  filter: 'common:client',
  translate: true,
  type: FilterType.DYNAMIC_LIST,
  key: 'user',
  labelKey: 'fullName',
  field: 'owner',
  fetchFunc: UserService.search,
  fetchOption: { size: 10 },
  queryKey: USERS_LIST_KEY,
};

export const reviewsFilters = [clientFilter, productFilter, createdATFilter];

export const reviewsReportFilters = [reportCauseFilter, createdATFilter];
