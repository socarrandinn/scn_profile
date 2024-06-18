import { useQuery } from '@tanstack/react-query';
import { UserInviteService } from 'modules/security/users/services';
import { useCallback } from 'react';

export const useFindEmailUserInvite = (inviteId: string | null) => {
  const fetch = useCallback(() => UserInviteService.getEmail(inviteId as string), [inviteId]);
  return useQuery<any>([inviteId, 'INVITE_CODE'], fetch, { enabled: !!inviteId });
};
