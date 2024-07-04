import { useQuery } from '@tanstack/react-query';
import { TagsService } from 'modules/inventory/settings/tags/services';
import { TAGS_ONE_KEY } from 'modules/inventory/settings/tags/constants';
import { useCallback } from 'react';
import { ITags } from 'modules/inventory/settings/tags/interfaces';

export const useFindOneTags = (id: string | null) => {
  const fetch = useCallback(() => TagsService.getOne(id as string), [id]);
  return useQuery<ITags>([id, TAGS_ONE_KEY], fetch, { enabled: !!id });
};
