import { useQuery } from '@tanstack/react-query';
import { USER_METRICS_KEY } from 'modules/security/users/constants/queries';
import UsersMetricService from '../services/UsersMetricService';
import { useHeaderFilterContext, useHeaderTableFilter } from '../contexts/HeaderFilterContext';
import { useTableRequest } from '@dfl/mui-admin-layout';

/* const useUsersMetricService = () => {
  const fetch = useCallback(() => UsersMetricService.getAll(), []);

  const query = useQuery<any>([USER_METRICS_KEY], fetch);
  return { ...query };
};
 */

export const useUsersMetricService = () => {
  const { interval } = useHeaderFilterContext();
  const { filters } = useHeaderTableFilter();
  const cInterval = interval?.toLowerCase();
  const { fetch, queryKey } = useTableRequest((params, config) =>
    UsersMetricService.getAll({ ...params, interval: cInterval }, config),
  );

  return useQuery([USER_METRICS_KEY, queryKey, filters, cInterval], fetch);
};

export default useUsersMetricService;
