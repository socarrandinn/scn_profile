import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { TagsService } from 'modules/inventory/settings/tags/services';
import { TAGS_LIST_KEY } from 'modules/inventory/settings/tags/constants';
import { useCallback, useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { TAG_NAMES, TAG_PROVIDER_ENUM } from '../interfaces';

export const useFindTags = () => {
  const { fetch, queryKey } = useTableRequest(TagsService.search);

  return useQuery([TAGS_LIST_KEY, queryKey], fetch);
};

export const useFindTagByRequired = (rule: TAG_NAMES | undefined = TAG_NAMES.PRODUCT) => {
  const filters = useMemo(() => new TermFilter({ field: `rules.${rule}.required`, value: true }), [rule]);
  const { fetch, queryKey } = useTableRequest(TagsService.search, filters);
  return useQuery([TAGS_LIST_KEY, `REQUIRED_TAG_${rule}`, queryKey], fetch);
};

export const useFindTagsByProvider = (provider: TAG_PROVIDER_ENUM) => {
  const filters = useMemo(() => new TermFilter({ field: 'isRequiredForProviders', value: provider }), [provider]);
  const { fetch, queryKey } = useTableRequest(TagsService.search, filters);
  return useQuery([TAGS_LIST_KEY, provider, queryKey], fetch);
};

export const useTagsFilterOptions = () => {
  const providerTagsFilter = useCallback(
    (provider: TAG_PROVIDER_ENUM) => new TermFilter({ type: 'TERM', filed: 'isRequiredForProviders', value: provider }),
    [],
  );

  return { providerTagsFilter };
};
