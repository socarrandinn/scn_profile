import { useCallback, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { USERS_ONE_KEY } from 'modules/security/users/constants/queries';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { UserService } from 'modules/security/users/services';
import { useLocation } from 'react-router';

export const useFindOneUsers = (id: string | null) => {
  const { pathname } = useLocation();
  const isMe = useMemo(() => pathname?.includes('/user/me') ? 'me' : '', [pathname]);

  const fetch = useCallback(() => {
    if (isMe) return UserService.getOne('me');
    return UserService.getOne(id as string);
  }, [id, isMe]);

  return useQuery<IUser>([id, isMe, USERS_ONE_KEY], fetch, { enabled: (!!id || isMe === 'me') });
};
