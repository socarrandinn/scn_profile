import { useQuery } from '@tanstack/react-query';
import { WORK_LOCATIONS_ONE_KEY } from 'modules/rrhh/settings/work-location/constants';
import { useCallback } from 'react';
import { IWorkLocation } from 'modules/rrhh/settings/work-location/interfaces';
import { WorkLocationService } from 'modules/rrhh/settings/work-location/services';

export const useFindOneWorkLocation = (id: string | null) => {
  const fetch = useCallback(() => WorkLocationService.getOne(id as string), [id]);
  return useQuery<IWorkLocation>([id, WORK_LOCATIONS_ONE_KEY], fetch, { enabled: !!id });
};
