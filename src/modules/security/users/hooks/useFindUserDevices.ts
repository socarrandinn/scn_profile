import { useQuery } from '@tanstack/react-query';
import UserDevicesService from 'modules/security/users/services/user-devices.service';
import { USER_DEVICES } from 'modules/security/users/constants/queries';
import { useLocation } from 'react-router';
import { useCallback, useMemo } from 'react';

export const useFindUserDevices = (userId?: string) => {
  const { pathname } = useLocation();
  const isMe = useMemo(() => (pathname?.includes('/user/me') ? 'me' : ''), [pathname]);

  const fetch = useCallback(() => {
    if (isMe) return UserDevicesService.search('me');
    return UserDevicesService.search(userId as string);
  }, [userId, isMe]);

  return useQuery([USER_DEVICES, userId, isMe], fetch, { enabled: !!userId || isMe === 'me' });
};
