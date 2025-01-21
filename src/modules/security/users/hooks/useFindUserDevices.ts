import { useQuery } from '@tanstack/react-query';
import UserDevicesService from 'modules/security/users/services/user-devices.service';
import { USER_DEVICES } from 'modules/security/users/constants/queries';
import { useTableRequest } from '@dfl/mui-admin-layout';

export const useFindUserDevices = (userId?: string) => {
  const { fetch, queryKey } = useTableRequest((params, config) =>
    UserDevicesService.getDevice(userId || 'me', params, config),
  );

  return useQuery([USER_DEVICES, userId, queryKey], fetch, { enabled: !!userId });
};
