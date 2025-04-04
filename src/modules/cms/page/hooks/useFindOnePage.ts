import { useQuery } from '@tanstack/react-query';
import { PageService } from 'modules/cms/page/services';
import { PAGES_ONE_KEY } from 'modules/cms/page/constants';
import { useCallback } from 'react';
import { IPage } from 'modules/cms/page/interfaces';

export const useFindOnePage = (id: string | null) => {
  const fetch = useCallback(() => PageService.getOne(id as string), [id]);
  return useQuery<IPage>([id, PAGES_ONE_KEY], fetch, { enabled: !!id });
};
