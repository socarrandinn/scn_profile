import { useQuery } from '@tanstack/react-query';
import { DispatchService } from 'modules/sales/dispatch/services';
import { DISPATCHES_ONE_KEY } from 'modules/sales/dispatch/constants';
import { useCallback } from 'react';
import { IDispatch } from 'modules/sales/dispatch/interfaces';

export const useFindOneDispatch = (id: string | null) => {
  const fetch = useCallback(() => DispatchService.getOne(id as string), [id]);
  return useQuery<IDispatch>([id, DISPATCHES_ONE_KEY], fetch, { enabled: !!id });
};
