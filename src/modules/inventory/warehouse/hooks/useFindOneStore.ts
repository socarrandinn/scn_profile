import { useQuery } from '@tanstack/react-query';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { WAREHOUSES_ONE_KEY } from 'modules/inventory/warehouse/constants';
import { useCallback } from 'react';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';

export const useFindOneStore = (id: string | null) => {
  const fetch = useCallback(() => WarehouseService.getOne(id as string), [id]);
  return useQuery<IWarehouse>([id, WAREHOUSES_ONE_KEY], fetch, { enabled: !!id });
};
