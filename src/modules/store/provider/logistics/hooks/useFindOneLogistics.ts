import { useQuery } from '@tanstack/react-query';
import { LogisticsService } from 'modules/store/provider/logistics/services';
import { LOGISTICS_ONE_KEY } from 'modules/store/provider/logistics/constants';
import { useCallback } from 'react';
import { ILogistics } from 'modules/store/provider/logistics/interfaces';

export const useFindOneLogistics = (id: string | null) => {
  const fetch = useCallback(() => LogisticsService.getOne(id as string), [id]);
  return useQuery<ILogistics>([id, LOGISTICS_ONE_KEY], fetch, { enabled: !!id });
};
