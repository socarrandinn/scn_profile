import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { COLLECTION_ELEMENTS_LIST_KEY } from 'modules/cms/collections/constants';

import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { CollectionElementService } from '../utils/service';

export const useFindCollectionElements = (collectionId: string, contentType: COLLECTION_CONTENT_TYPE) => {
  const { fetch, queryKey } = useTableRequest((params, config) =>
    CollectionElementService[contentType].search(collectionId, params, config),
  );

  return useQuery([COLLECTION_ELEMENTS_LIST_KEY, queryKey, collectionId], fetch, { enabled: !!collectionId });
};
