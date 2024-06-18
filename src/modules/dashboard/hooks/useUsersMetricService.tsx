import { useQuery } from '@tanstack/react-query';
import { USER_METRICS_KEY } from 'modules/security/users/constants/queries';
import { useCallback } from 'react';
import UsersMetricService from '../services/UsersMetricService';

const useUsersMetricService = () => {
  const fetch = useCallback(() => UsersMetricService.getAll(), []);

  const query = useQuery<any>([USER_METRICS_KEY], fetch);
  console.log('query', query);
  return { ...query };
};
export default useUsersMetricService;
