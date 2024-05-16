import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ReportCauseService } from 'modules/crm/report-cause/services';
import { REPORT_CAUSES_LIST_KEY } from 'modules/crm/report-cause/constants';

export const useFindReportCauses = (open: boolean) => {
  const { fetch, queryKey } = useTableRequest(ReportCauseService.search);

  return useQuery([REPORT_CAUSES_LIST_KEY, queryKey], fetch, { enabled: open });
};
