import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ManufactureService } from 'modules/provider/manufacture/services';
import toast from 'react-hot-toast';
import { MANUFACTURES_LIST_KEY } from 'modules/provider/manufacture/constants';
import { useTranslation } from 'react-i18next';

const useUpdateStateManufacture = (idManufacture: string) => {
  const { t } = useTranslation('errors');
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((state: boolean) => ManufactureService.update(idManufacture, { state }), {
    onSuccess: ({ data }: any) => {
      queryClient.invalidateQueries([MANUFACTURES_LIST_KEY]);
      queryClient.invalidateQueries([idManufacture]);
      toast.success(t('successUpdate'));
    },
    onError: () => {
      toast.error(t('generalErrorMessage', { ns: 'errors' }));
    },
  })
  return {
    updateState: mutate,
    isLoading,
  };
}

export default useUpdateStateManufacture;
