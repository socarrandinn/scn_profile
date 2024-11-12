import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { NotificationService } from '../services';
import { NOTIFICATION_LIST_KEY } from '../constants/query';

export const useFindNotifications = () => {
  const {
    fetch,
    queryKey: { page, size, sort },
  } = useTableRequest(NotificationService.searchNotification);

  return useQuery([NOTIFICATION_LIST_KEY, page, size, sort], fetch, {
    refetchInterval: 300000, // 5m
    staleTime: 300000, // 5m
  });
};
