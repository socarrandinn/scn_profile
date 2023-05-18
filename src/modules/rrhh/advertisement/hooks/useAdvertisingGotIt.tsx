import { useMutation, useQueryClient } from '@tanstack/react-query';
import AdvertisementsService from 'modules/rrhh/advertisement/services/advertisement.service';
import { ADVERTISEMENTS_LIST_KEY } from 'modules/rrhh/advertisement/constants/advertisement.queries';

export const useAdvertisingGotIt = () => {
  const queryClient = useQueryClient();

  return useMutation((id: string) => AdvertisementsService.updateGotIt(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([ADVERTISEMENTS_LIST_KEY]);
    },
  });
};
