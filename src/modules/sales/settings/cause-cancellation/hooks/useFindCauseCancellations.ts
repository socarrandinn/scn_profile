import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { CauseCancellationService } from 'modules/sales/settings/cause-cancellation/services';
import { CAUSE_CANCELLATIONS_LIST_KEY } from 'modules/sales/settings/cause-cancellation/constants';

export const useFindCauseCancellations = () => {
  const { fetch, queryKey } = useTableRequest(CauseCancellationService.search);

  return useQuery([CAUSE_CANCELLATIONS_LIST_KEY, queryKey], fetch);
};
