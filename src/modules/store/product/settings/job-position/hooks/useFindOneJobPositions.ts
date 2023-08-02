import { useQuery } from '@tanstack/react-query';
import { JobPositionService } from 'modules/store/product/settings/job-position/services';
import { JOB_POSITIONS_ONE_KEY } from 'modules/store/product/settings/job-position/constants';
import { useCallback } from 'react';
import { IJobPosition } from 'modules/store/product/settings/job-position/interfaces';

export const useFindOneJobPositions = (id: string | null) => {
  const fetch = useCallback(() => JobPositionService.getOne(id as string), [id]);
  return useQuery<IJobPosition>([id, JOB_POSITIONS_ONE_KEY], fetch, { enabled: !!id });
};
