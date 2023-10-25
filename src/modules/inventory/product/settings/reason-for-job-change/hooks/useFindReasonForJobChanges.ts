import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ReasonForJobChangeService } from 'modules/inventory/product/settings/reason-for-job-change/services';
import { REASON_FOR_JOB_CHANGES_LIST_KEY } from 'modules/inventory/product/settings/reason-for-job-change/constants/queries';

export const useFindReasonForJobChanges = () => {
  const { fetch, queryKey } = useTableRequest(ReasonForJobChangeService.search);

  return useQuery([REASON_FOR_JOB_CHANGES_LIST_KEY, queryKey], fetch);
};
