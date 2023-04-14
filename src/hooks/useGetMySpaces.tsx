import { useQuery } from '@tanstack/react-query';
import SpaceService from 'modules/security/spaces/services/Space.service';

export const useGetMySpaces = (enabled: boolean) => {
  return useQuery(['MY-SPACES'], SpaceService.mySpaces, {
    enabled,
  });
};
