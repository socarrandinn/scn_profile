import { useQuery } from '@tanstack/react-query';
import { COLLECTIONS_ONE_KEY } from 'modules/cms/collections/constants';
import { useCallback } from 'react';
import { ICollection } from 'modules/cms/collections/interfaces';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { CollectionService } from '../utils/service';

export const useFindOneCollections = (id: string | null, contentType: COLLECTION_CONTENT_TYPE) => {
  const fetch = useCallback(() => CollectionService[contentType].getOne(id as string), [contentType, id]);
  return useQuery<ICollection>([id, COLLECTIONS_ONE_KEY], fetch, { enabled: !!id });
};
