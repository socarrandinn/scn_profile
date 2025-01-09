import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { TestimonyService } from 'modules/cms/testimony/services';
import { TESTIMONIES_LIST_KEY } from 'modules/cms/testimony/constants';

export const useFindTestimonies = () => {
  const { fetch, queryKey } = useTableRequest(TestimonyService.search);

  return useQuery([TESTIMONIES_LIST_KEY, queryKey], fetch);
};
