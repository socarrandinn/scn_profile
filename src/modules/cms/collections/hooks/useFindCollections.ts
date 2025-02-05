import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { COLLECTIONS_LIST_KEY } from 'modules/cms/collections/constants';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';
import { CollectionService } from '../utils/service';

export const useFindCollections = (contentType: COLLECTION_CONTENT_TYPE) => {
  const filters = useMemo(() => new TermFilter({ field: 'contentType', value: contentType }), [contentType]);
  const { fetch, queryKey } = useTableRequest(CollectionService[contentType].search, filters);

  return useQuery([COLLECTIONS_LIST_KEY, queryKey, contentType], fetch, { enabled: !!contentType });
};
