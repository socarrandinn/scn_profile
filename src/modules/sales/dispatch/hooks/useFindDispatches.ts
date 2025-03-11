import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { DispatchService } from 'modules/sales/dispatch/services';
import { DISPATCHES_LIST_KEY } from 'modules/sales/dispatch/constants';

export const useFindDispatches = () => {
  const { fetch, queryKey } = useTableRequest(DispatchService.search);

  return useQuery([DISPATCHES_LIST_KEY, queryKey], fetch);
};
