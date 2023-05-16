import { useMutation, useQueryClient } from '@tanstack/react-query';
import AdvertisementsService from 'modules/dashboard/services/advertisements.service';
import { ADVERTISEMENTS_LIST_KEY } from 'modules/dashboard/constants/queries';

export const useAdvertisingGotIt = () => {
  const queryClient = useQueryClient();

  return useMutation((id: string) => AdvertisementsService.updateGotIt(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([ADVERTISEMENTS_LIST_KEY]);
    },
  });
};
