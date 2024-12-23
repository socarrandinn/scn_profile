import { useQuery } from '@tanstack/react-query';
import UserDevicesService from 'modules/security/users/services/user-devices.service';
import { USER_DEVICES } from 'modules/security/users/constants/queries';
import { useCallback } from 'react';
import { IUserDevices } from 'modules/security/users/interfaces/IUserDevices';

export const useFindUserDevices = (userId?: string) => {
  const fetch = useCallback(() => UserDevicesService.search(userId as string), [userId]);

  return useQuery<IUserDevices[]>([USER_DEVICES, userId], fetch, { enabled: !!userId });
};
