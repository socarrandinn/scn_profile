import { useQuery } from '@tanstack/react-query';
import { JobPositionService } from 'modules/rrhh/job-position/services';
import { JOB_POSITIONS_ONE_KEY } from 'modules/rrhh/job-position/constants/queries';
import { useCallback } from 'react';
import { IJobPosition } from 'modules/rrhh/job-position/interfaces';

export const useFindOneJobPositions = (id: string | null) => {
  const fetch = useCallback(() => JobPositionService.getOne(id as string), [id]);
  return useQuery<IJobPosition>([id, JOB_POSITIONS_ONE_KEY], fetch, { enabled: !!id });
};
