import { useQuery } from '@tanstack/react-query';
import { StoreService } from 'modules/inventory/store/services';
import { STORES_ONE_KEY } from 'modules/inventory/store/constants';
import { useCallback } from 'react';
import { IStore } from 'modules/inventory/store/interfaces';

export const useFindOneStore = (id: string | null) => {
  const fetch = useCallback(() => StoreService.getOne(id as string), [id]);
  return useQuery<IStore>([id, STORES_ONE_KEY], fetch, { enabled: !!id });
};
