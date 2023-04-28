import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { CategoryService } from 'modules/rrhh/settings/category/services';
import { CATEGORIES_LIST_KEY } from 'modules/rrhh/settings/category/constants';

export const useFindCategories = () => {
  const { fetch, queryKey } = useTableRequest(CategoryService.search);

  return useQuery([CATEGORIES_LIST_KEY, queryKey], fetch);
};
