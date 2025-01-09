import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { CollectionsService } from 'modules/cms/collections/services';
import { COLLECTIONS_LIST_KEY } from 'modules/cms/collections/constants';

export const useFindCollections = () => {
  const { fetch, queryKey } = useTableRequest(CollectionsService.search);

  return useQuery([COLLECTIONS_LIST_KEY, queryKey], fetch);
};
