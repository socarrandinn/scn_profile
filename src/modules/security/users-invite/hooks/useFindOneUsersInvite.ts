import { useQuery } from '@tanstack/react-query';
import { UsersInviteService } from 'modules/security/users-invite/services';
import { USERS_INVITES_ONE_KEY } from 'modules/security/users-invite/constants';
import { useCallback } from 'react';
import { IUsersInvite } from 'modules/security/users-invite/interfaces';

export const useFindOneUsersInvite = (id: string | null) => {
  const fetch = useCallback(() => UsersInviteService.getOne(id as string), [id]);
  return useQuery<IUsersInvite>([id, USERS_INVITES_ONE_KEY], fetch, { enabled: !!id });
};
