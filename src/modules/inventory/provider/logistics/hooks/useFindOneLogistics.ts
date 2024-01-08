import { useQuery } from '@tanstack/react-query';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';
import { LOGISTICS_ONE_KEY } from 'modules/inventory/provider/logistics/constants';
import { useCallback } from 'react';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';

export const useFindOneLogistics = (id: string | null) => {
  const fetch = useCallback(() => LogisticsService.getOne(id as string), [id]);
  return useQuery<ILogistics>([id, LOGISTICS_ONE_KEY], fetch, { enabled: !!id });
};
