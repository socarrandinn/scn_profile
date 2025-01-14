import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { IBanner } from '../interfaces/IBanner';
import { BANNERS_ONE_KEY } from '../constants';
import { BannerService } from '../services';

export const useFindOneBanner = (id: string | null) => {
  const fetch = useCallback(() => BannerService.getOne(id as string), [id]);
  return useQuery<IBanner>([id, BANNERS_ONE_KEY], fetch, { enabled: !!id });
};
