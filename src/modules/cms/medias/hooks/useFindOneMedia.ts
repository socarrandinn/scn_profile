import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { MediaService } from '../services';
import { MEDIA_ONE_KEY } from '../constants/medias.queries';
import { IMedia } from '../interfaces/IMedia';

export const useFindOneMedia = (id: string | null) => {
  const fetch = useCallback(() => MediaService.getOne(id as string), [id]);
  return useQuery<IMedia>([id, MEDIA_ONE_KEY], fetch, { enabled: !!id });
};
