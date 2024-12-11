import { useQuery } from '@tanstack/react-query';
import UserDevicesService from 'modules/security/users/services/user-devices.service';
import { USER_DEVICES } from 'modules/security/users/constants/queries';
import { useCallback } from 'react';
import { IUserDevices } from 'modules/security/users/interfaces/IUserDevices';

export const useFindAccountDevices = () => {
  const fetch = useCallback(() => UserDevicesService.search('me'), []);

  return useQuery<IUserDevices[]>([USER_DEVICES, 'me'], fetch);
};
