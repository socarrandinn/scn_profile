import { useQuery } from '@tanstack/react-query';
import { StoreAreaService } from 'modules/inventory/settings/store-area/services';
import { STORE_AREAS_ONE_KEY } from 'modules/inventory/settings/store-area/constants';
import { useCallback } from 'react';
import { IStoreArea } from 'modules/inventory/settings/store-area/interfaces';

export const useFindOneStoreArea = (id: string | null) => {
  const fetch = useCallback(() => StoreAreaService.getOne(id as string), [id]);
  return useQuery<IStoreArea>([id, STORE_AREAS_ONE_KEY], fetch, { enabled: !!id });
};
