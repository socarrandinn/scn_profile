import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { COLLECTION_ELEMENTS_LIST_KEY } from 'modules/cms/collections/constants';
import { CollectionElementsService } from '../services';

export const useFindCollectionElements = (collectionId?: string) => {
  const { fetch, queryKey } = useTableRequest(() => CollectionElementsService.search(collectionId as string));

  return useQuery([COLLECTION_ELEMENTS_LIST_KEY, queryKey], fetch, { enabled: !!collectionId });
};
