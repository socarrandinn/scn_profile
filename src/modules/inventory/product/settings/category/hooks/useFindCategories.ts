import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { CategoryService } from 'modules/inventory/product/settings/category/services';
import { CATEGORIES_LIST_KEY } from 'modules/inventory/product/settings/category/constants';

export const useFindCategories = () => {
  const { fetch, queryKey } = useTableRequest(CategoryService.search);

  return useQuery([CATEGORIES_LIST_KEY, queryKey], fetch);
};
