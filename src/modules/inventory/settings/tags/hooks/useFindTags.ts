import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { TagsService } from 'modules/inventory/settings/tags/services';
import { TAGS_LIST_KEY } from 'modules/inventory/settings/tags/constants';

export const useFindTags = () => {
  const { fetch, queryKey } = useTableRequest(TagsService.search);

  return useQuery([TAGS_LIST_KEY, queryKey], fetch);
};
