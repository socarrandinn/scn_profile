import { useQuery } from '@tanstack/react-query';
import { TIME_OFF_LIST_KEY } from '../constants/time-off.queries';
import TimeOffService from '../services/time-off.service';

export const useCountPendingTimeOffRequest = () => {
  return useQuery([TIME_OFF_LIST_KEY, 'pending'], () => TimeOffService.countPending(), {
    staleTime: 10000
  });
};
