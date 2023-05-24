import UserServices from 'modules/security/users/services/user.services';
import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';

export const useFindEmployeeByTeam = (teamId: string) => {
  const { fetch, queryKey } = useTableRequest(UserServices.search, {
    field: 'jobInformation.team._id',
    value: teamId,
  });

  return useQuery(['members', teamId, queryKey], fetch);
};
