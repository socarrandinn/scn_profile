import { useQuery } from '@tanstack/react-query';
import { AdvertisementService } from 'modules/rrhh/advertisement/services';
import { ADVERTISEMENTS_ONE_KEY } from 'modules/rrhh/advertisement/constants';
import { useCallback } from 'react';
import { IAdvertisement } from 'modules/rrhh/advertisement/interfaces';

export const useFindOneAdvertisement = (id: string | null) => {
  const fetch = useCallback(() => AdvertisementService.getOne(id as string), [id]);
  return useQuery<IAdvertisement>([id, ADVERTISEMENTS_ONE_KEY], fetch, { enabled: !!id });
};
