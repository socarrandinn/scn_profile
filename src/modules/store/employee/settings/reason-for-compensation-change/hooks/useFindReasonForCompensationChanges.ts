import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ReasonForCompensationChangeService } from 'modules/store/employee/settings/reason-for-compensation-change/services';
import { REASON_FOR_COMPENSATION_CHANGES_LIST_KEY } from 'modules/store/employee/settings/reason-for-compensation-change/constants/queries';

export const useFindReasonForCompensationChanges = () => {
  const { fetch, queryKey } = useTableRequest(ReasonForCompensationChangeService.search);

  return useQuery([REASON_FOR_COMPENSATION_CHANGES_LIST_KEY, queryKey], fetch);
};
