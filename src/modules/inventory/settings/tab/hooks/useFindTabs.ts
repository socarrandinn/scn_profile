import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { TabService } from 'modules/inventory/settings/tab/services';
import { TABS_LIST_KEY } from 'modules/inventory/settings/tab/constants';

export const useFindTabs = () => {
  const { fetch, queryKey } = useTableRequest(TabService.search);

  return useQuery([TABS_LIST_KEY, queryKey], fetch);
};
