import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { REVIEW_REPORT_CAUSES_LIST_KEY } from './reviews.queries';
import { ReportCauseService } from 'modules/crm/report-cause/services';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCT_LIST_KEY } from 'modules/inventory/product/constants/query-keys';
import { UserService } from 'modules/security/users/services';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { EmptyFilter, OperatorFilter, TermFilter } from '@dofleini/query-builder';

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

export const reportFilter: Filter = {
  filter: 'rate:fields:report',
  translate: true,
  type: FilterType.NUMBER,
  key: 'report',
  field: 'report.count',
};

export const deleteFilter: Filter = {
  filter: 'rate:fields.deleted',
  translate: true,
  type: FilterType.FIXED_LIST,
  key: 'deleted',
  field: 'deleted',
  transform: (value) => {
    if (Array.isArray(value)) return new EmptyFilter();
    switch (value) {
      case 'false':
        return new OperatorFilter({
          type: 'OR',
          filters: [
            new TermFilter({ field: 'deleted', value: false }),
            new TermFilter({ field: 'deleted', value: null }),
          ],
        }).toQuery();
      case 'true': {
        return new TermFilter({ field: 'deleted', value: true }).toQuery();
      }
    }
  },
  options: [
    {
      value: 'true',
      translate: true,
      label: 'rate:rateStatus:deleted',
    },
    {
      value: 'false',
      translate: true,
      label: 'rate:rateStatus:notDeleted',
    },
  ],
};

export const reviewsFilters = [reportFilter, clientFilter, productFilter, createdATFilter];

export const reviewsReportFilters = [reportCauseFilter, createdATFilter];
