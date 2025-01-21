import { useQuery } from '@tanstack/react-query';
import UserDevicesService from 'modules/security/users/services/user-devices.service';
import { USER_DEVICES } from 'modules/security/users/constants/queries';

import { useTableRequest } from '@dfl/mui-admin-layout';

/* export const useFindAccountDevices = () => {
  const fetch = useCallback(() => UserDevicesService.getDevice('me'), []);

  return useQuery<IUserDevices[]>([USER_DEVICES, 'me'], fetch);
}; */

export const useFindAccountDevices = () => {
  const { fetch, queryKey } = useTableRequest((params, config) => UserDevicesService.getDevice('me', params, config));

  return useQuery([USER_DEVICES, queryKey, 'me'], fetch);
};
