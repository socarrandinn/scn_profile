import { useQuery } from '@tanstack/react-query';
import { WarehouseAreaService } from 'modules/inventory/settings/warehouse-area/services';
import { STORE_AREAS_ONE_KEY } from 'modules/inventory/settings/warehouse-area/constants';
import { useCallback } from 'react';
import { IStoreArea } from 'modules/inventory/settings/warehouse-area/interfaces';

export const useFindOneStoreArea = (id: string | null) => {
  const fetch = useCallback(() => WarehouseAreaService.getOne(id as string), [id]);
  return useQuery<IStoreArea>([id, STORE_AREAS_ONE_KEY], fetch, { enabled: !!id });
};
