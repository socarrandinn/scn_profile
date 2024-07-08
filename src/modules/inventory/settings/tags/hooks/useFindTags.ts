import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { TagsService } from 'modules/inventory/settings/tags/services';
import { TAGS_LIST_KEY } from 'modules/inventory/settings/tags/constants';
import { useCallback, useMemo } from 'react';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { TAG_PROVIDER_ENUM } from '../interfaces';

export const useFindTags = () => {
  const { fetch, queryKey } = useTableRequest(TagsService.search);

  return useQuery([TAGS_LIST_KEY, queryKey], fetch);
};

export const useFindTagsByProduct = () => {
  const filters = useMemo(() => new TermFilter({ field: 'isRequiredForProducts', value: true }), []);
  const { fetch, queryKey } = useTableRequest(TagsService.search, filters);
  return useQuery([TAGS_LIST_KEY, queryKey], fetch);
};

export const useTagsFilterOptions = () => {
  const providerTagsFilter = useCallback((value: TAG_PROVIDER_ENUM) => {
    const filters = new OperatorFilter({
      type: 'AND',
      filters: [
        new TermFilter({ field: 'isRequiredForProducts', value: true }),
        // new ExistFilter({ filed: 'isRequiredForProviders', value }),
      ],
    }).toQuery();
    return filters;
  }, []);

  return { providerTagsFilter };
};
