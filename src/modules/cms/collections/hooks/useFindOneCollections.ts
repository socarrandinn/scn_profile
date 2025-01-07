import { useQuery } from '@tanstack/react-query';
import { CollectionsService } from 'modules/cms/collections/services';
import { COLLECTIONS_ONE_KEY } from 'modules/cms/collections/constants';
import { useCallback } from 'react';
import { ICollections } from 'modules/cms/collections/interfaces';

export const useFindOneCollections = (id: string | null) => {
  const fetch = useCallback(() => CollectionsService.getOne(id as string), [id]);
  return useQuery<ICollections>([id, COLLECTIONS_ONE_KEY], fetch, { enabled: !!id });
};
