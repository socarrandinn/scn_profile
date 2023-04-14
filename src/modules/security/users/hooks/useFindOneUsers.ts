import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { USERS_ONE_KEY } from 'modules/security/users/constants/queries';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { UserService } from 'modules/security/users/services';

export const useFindOneUsers = (id: string | null) => {
  const fetch = useCallback(() => UserService.getOne(id as string), [id]);
  return useQuery<IUser>([id, USERS_ONE_KEY], fetch, { enabled: !!id });
};
