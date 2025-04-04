import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { PageService } from 'modules/cms/page/services';
import { PAGES_LIST_KEY } from 'modules/cms/page/constants';

export const useFindPages = () => {
  const { fetch, queryKey } = useTableRequest(PageService.search);

  return useQuery([PAGES_LIST_KEY, queryKey], fetch);
};
