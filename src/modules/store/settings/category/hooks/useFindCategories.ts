import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { CategoryService } from 'modules/store/settings/category/services';
import { CATEGORIES_LIST_KEY, VIEW_TYPE } from 'modules/store/settings/category/constants';
import { useSearchParamsChange } from '@dfl/react-security';
import { useMemo } from 'react';

export const useFindCategories = (parent?: string) => {
  const { value } = useSearchParamsChange('view');
  const view = value || VIEW_TYPE.tree
  const filter = useMemo(() => {
    if (!parent) {
      if (view === VIEW_TYPE.flat) {
        return undefined
      }
      return {
        type: 'TERM',
        field: 'parent',
        value: null,
      }
    }
    if (view === VIEW_TYPE.flat) {
      return {
        type: 'OR',
        filters: [{
          type: 'TERM',
          field: 'categoryPath',
          value: parent,
          objectId: true
        },
        {
          type: 'TERM',
          field: 'parent',
          value: parent,
          objectId: true
        }
        ]
      }
    }
    return {
      type: 'TERM',
      field: 'parent',
      value: parent,
      objectId: true
    }
  }, [view, parent]
  )

  const { fetch, queryKey } = useTableRequest(CategoryService.search, filter);

  return useQuery([CATEGORIES_LIST_KEY, queryKey], fetch);
};
