import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BankService } from 'modules/sales/settings/bank/services';
import { BANKS_LIST_KEY } from 'modules/sales/settings/bank/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteBank = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('bank');
  return useMutation(() => BankService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([BANKS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
