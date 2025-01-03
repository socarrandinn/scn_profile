import { useQuery } from '@tanstack/react-query';
import { TestimonyService } from 'modules/cms/testimony/services';
import { TESTIMONIES_ONE_KEY } from 'modules/cms/testimony/constants';
import { useCallback } from 'react';
import { ITestimony } from 'modules/cms/testimony/interfaces';

export const useFindOneTestimony = (id: string | null) => {
  const fetch = useCallback(() => TestimonyService.getOne(id as string), [id]);
  return useQuery<ITestimony>([id, TESTIMONIES_ONE_KEY], fetch, { enabled: !!id });
};
