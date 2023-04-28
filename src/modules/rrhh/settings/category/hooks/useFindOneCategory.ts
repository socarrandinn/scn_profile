import { useQuery } from '@tanstack/react-query';
import { CategoryService } from 'modules/rrhh/settings/category/services';
import { CATEGORIES_ONE_KEY } from 'modules/rrhh/settings/category/constants';
import { useCallback } from 'react';
import { ICategory } from 'modules/rrhh/settings/category/interfaces';

export const useFindOneCategory = (id: string | null) => {
  const fetch = useCallback(() => CategoryService.getOne(id as string), [id]);
  return useQuery<ICategory>([id, CATEGORIES_ONE_KEY], fetch, { enabled: !!id });
};
