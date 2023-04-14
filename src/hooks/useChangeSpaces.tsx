import { useMutation, useQueryClient } from '@tanstack/react-query';
import SpaceService from 'modules/security/spaces/services/Space.service';
import { useNavigate } from 'react-router';
import { ApiClientService, useAuth } from '@dfl/react-security';

export const useChangeSpaces = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: changeSpace, isLoading } = useMutation(async (space: string) => {
    ApiClientService.setSpace(space);
    const { data } = await SpaceService.changeSpaceToken(space);
    setAuth(data);
    navigate('/');
    queryClient.resetQueries([]).then();
  });

  return {
    changeSpace,
    isLoading,
  };
};
