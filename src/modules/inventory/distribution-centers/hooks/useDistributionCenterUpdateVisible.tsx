import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';

const useDistributionCenterUpdateVisible = (id: string) => {
  const { t } = useTranslation(['distributionCenters', 'errors']);
  // const queryClient = useQueryClient();

  const { mutateAsync, isLoading, data } = useMutation(
    (visible: boolean) => DistributionCentersService.updateVisibility(id, { visible }),
    {
      onSuccess: () => {
        // queryClient.invalidateQueries([id]);
        toast.success(t('provider:visibilitySuccessUpdate'));
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );

  return {
    updateVisible: mutateAsync,
    isLoading,
    value: data?.data?.visible,
  };
};

export default useDistributionCenterUpdateVisible;
