import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';

const useStoreUpdateVisible = (id: string) => {
  const { t } = useTranslation(['warehouse', 'errors']);
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (visible: boolean) => DistributionCentersService.updateVisibility(id, { visible }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([id]);
        toast.success(t('successUpdate'));
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
