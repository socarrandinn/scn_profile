import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { TIME_OFF_LIST_KEY } from '../constants/time-off.queries';
import TimeOffService from '../services/time-off.service';

export const useFindTimeOffRequest = () => {
  const { fetch, queryKey } = useTableRequest(TimeOffService.searchPopulate);

  return useQuery([TIME_OFF_LIST_KEY, queryKey], fetch);
};
