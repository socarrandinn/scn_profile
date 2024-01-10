import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';

const useUpdateStatusLogistics = (idProoviderLogistics: string) => {
  const { t } = useTranslation('errors');
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((active: boolean) => LogisticsService.update(idProoviderLogistics, { active }), {
    onSuccess: ({ data }: any) => {
      queryClient.invalidateQueries([LOGISTICS_LIST_KEY]);
      queryClient.invalidateQueries([idProoviderLogistics]);
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

export default useUpdateStatusLogistics;
