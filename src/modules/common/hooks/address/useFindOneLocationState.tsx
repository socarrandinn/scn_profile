import { useCallback } from 'react';
import { ADDRESS_STATE_ONE_KEY } from 'modules/common/constants/address.queries';
import { useQuery } from '@tanstack/react-query';
import { AddressService } from 'modules/common/service';

export const useFindOneLocationState = (code: string) => {
  const fetch = useCallback(() => AddressService.getOne(code), [code]);
  return useQuery([code, ADDRESS_STATE_ONE_KEY], fetch, {
    enabled: !!code,
    staleTime: 1000 * 60 * 60, // 1h
  });
};
