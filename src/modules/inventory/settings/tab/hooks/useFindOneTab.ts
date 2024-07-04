import { useQuery } from '@tanstack/react-query';
import { TabService } from 'modules/inventory/settings/tab/services';
import { TABS_ONE_KEY } from 'modules/inventory/settings/tab/constants';
import { useCallback } from 'react';
import { ITab } from 'modules/inventory/settings/tab/interfaces';

export const useFindOneTab = (id: string | null) => {
  const fetch = useCallback(() => TabService.getOne(id as string), [id]);
  return useQuery<ITab>([id, TABS_ONE_KEY], fetch, { enabled: !!id });
};
