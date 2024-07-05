import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { TagsService } from 'modules/inventory/settings/tags/services';
import { TAGS_LIST_KEY } from 'modules/inventory/settings/tags/constants';
import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';

export const useFindTags = () => {
  const { fetch, queryKey } = useTableRequest(TagsService.search);

  return useQuery([TAGS_LIST_KEY, queryKey], fetch);
};

export const useFindTagsByProduct = () => {
  const filters = useMemo(() => new TermFilter({ field: 'isRequiredForProducts', value: true }), []);
  const { fetch, queryKey } = useTableRequest(TagsService.search, filters);
  return useQuery([TAGS_LIST_KEY, queryKey], fetch);
};
