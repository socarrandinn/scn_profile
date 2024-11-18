import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WarehouseService } from '../services';

const useStoreUpdateVisible = (id: string) => {
  const { t } = useTranslation(['warehouse', 'errors']);
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (visible: boolean) => WarehouseService.updateVisibility(id, { visible }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([id]);
        toast.success(t('provider:visibilitySuccessUpdate'));
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    });

  return {
    updateVisible: mutate,
    isLoading,
  };
};

export default useStoreUpdateVisible;
