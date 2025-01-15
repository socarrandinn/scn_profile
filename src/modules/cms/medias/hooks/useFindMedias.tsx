import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { MediaService } from '../services';
import { MEDIA_LIST_KEY } from '../constants/medias.queries';

export const useFindMedias = () => {
  const { fetch, queryKey } = useTableRequest(MediaService.search);

  return useQuery([MEDIA_LIST_KEY, queryKey], fetch);
};
