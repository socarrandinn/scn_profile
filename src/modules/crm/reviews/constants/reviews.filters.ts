import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { createdATFilter } from 'modules/common/constants';
import { REVIEW_REPORT_CAUSES_LIST_KEY } from './reviews.queries';
import { ReportCauseService } from 'modules/crm/report-cause/services';

export const reviewsFilters = [createdATFilter];

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

export const reviewsReportFilters = [reportCauseFilter, createdATFilter];
