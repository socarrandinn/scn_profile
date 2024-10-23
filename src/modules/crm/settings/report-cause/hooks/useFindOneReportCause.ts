import { useQuery } from '@tanstack/react-query';
import { ReportCauseService } from 'modules/crm/settings/report-cause/services';
import { REPORT_CAUSES_ONE_KEY } from 'modules/crm/settings/report-cause/constants';
import { useCallback } from 'react';
import { IReportCause } from 'modules/crm/settings/report-cause/interfaces';

export const useFindOneReportCause = (id: string | null) => {
  const fetch = useCallback(() => ReportCauseService.getOne(id as string), [id]);
  return useQuery<IReportCause>([id, REPORT_CAUSES_ONE_KEY], fetch, { enabled: !!id });
};
