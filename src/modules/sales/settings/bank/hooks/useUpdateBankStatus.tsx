import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { BankService } from '../services';
import { BANKS_LIST_KEY } from '../constants';

const useUpdateBankStatus = (bankId: string) => {
  const { t } = useTranslation(['product', 'errors']);
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, data } = useMutation(
    (status: string) => BankService.updateStatus(bankId, status === 'true'),
    {
      onSuccess: ({ data }: any) => {
        toast.success(t('provider:visibilitySuccessUpdate'));
        queryClient.invalidateQueries([BANKS_LIST_KEY]);
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );

  return {
    updateStatus: mutateAsync,
    isLoading,
    value: data?.data?.enabled,
  };
};

export default useUpdateBankStatus;
