import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { JobPositionService } from 'modules/rrhh/job-position/services';
import { JOB_POSITIONS_LIST_KEY } from 'modules/rrhh/job-position/constants/queries';

export const useFindJobPositions = () => {
  const { fetch, queryKey } = useTableRequest(JobPositionService.search);

  return useQuery([JOB_POSITIONS_LIST_KEY, queryKey], fetch);
};
