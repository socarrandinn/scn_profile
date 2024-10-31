import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { UsersInviteService } from 'modules/security/users-invite/services';
import { USERS_INVITES_LIST_KEY } from 'modules/security/users-invite/constants';
import { useMemo } from 'react';
import { TermFilter } from '@dofleini/query-builder';

export const useFindUsersInvites = () => {
  const { fetch, queryKey } = useTableRequest(UsersInviteService.search);

  return useQuery([USERS_INVITES_LIST_KEY, queryKey], fetch);
};

/**
 * provider: logistic o supplier
 */
export const useFindProviderUsersInvites = (provider?: string) => {
  const filters = useMemo(
    () => new TermFilter({ field: 'provider', value: provider, objectId: true }),
    [provider],
  );
  const { fetch, queryKey } = useTableRequest(UsersInviteService.search, filters);

  return useQuery([USERS_INVITES_LIST_KEY, queryKey, provider], fetch, { enabled: !!provider });
};

/**
 * distribution center users
 */
export const useFindDistributionCenterUsersInvites = (distributionCenterId?: string) => {
  const filters = useMemo(
    () => new TermFilter({ field: 'distributionCenter', value: distributionCenterId, objectId: true }),
    [distributionCenterId],
  );
  const { fetch, queryKey } = useTableRequest(UsersInviteService.search, filters);

  return useQuery([USERS_INVITES_LIST_KEY, queryKey, distributionCenterId], fetch, { enabled: !!distributionCenterId });
};
