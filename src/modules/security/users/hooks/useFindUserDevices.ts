import { useQuery } from '@tanstack/react-query';
import UserDevicesService from 'modules/security/users/services/user-devices.service';
import { USER_DEVICES } from 'modules/security/users/constants/queries';

export const useFindUserDevices = (userId?: string) => {
  const fetch = () => UserDevicesService.search(userId);

  return useQuery([USER_DEVICES], fetch);
};
