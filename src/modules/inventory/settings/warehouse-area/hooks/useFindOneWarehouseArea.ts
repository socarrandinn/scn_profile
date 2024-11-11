import { useQuery } from '@tanstack/react-query';
import { WarehouseAreaService } from 'modules/inventory/settings/warehouse-area/services';
import { WAREHOUSE_AREAS_ONE_KEY } from 'modules/inventory/settings/warehouse-area/constants';
import { useCallback } from 'react';
import { IWarehouseArea } from 'modules/inventory/settings/warehouse-area/interfaces';

export const useFindOneWarehouseArea = (id: string | null) => {
  const fetch = useCallback(() => WarehouseAreaService.getOne(id as string), [id]);
  return useQuery<IWarehouseArea>([id, WAREHOUSE_AREAS_ONE_KEY], fetch, { enabled: !!id });
};
