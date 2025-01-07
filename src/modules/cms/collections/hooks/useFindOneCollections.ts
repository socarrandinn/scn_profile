import { useQuery } from '@tanstack/react-query';
import { CollectionsService } from 'modules/cms/collections/services';
import { COLLECTIONS_ONE_KEY } from 'modules/cms/collections/constants';
import { useCallback } from 'react';
import { ICollection } from 'modules/cms/collections/interfaces';

export const useFindOneCollections = (id: string | null) => {
  const fetch = useCallback(() => CollectionsService.getOne(id as string), [id]);
  return useQuery<ICollection>([id, COLLECTIONS_ONE_KEY], fetch, { enabled: !!id });
};
