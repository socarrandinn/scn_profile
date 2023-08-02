import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReasonForCompensationChangeService } from 'modules/store/product/settings/reason-for-compensation-change/services';
import { REASON_FOR_COMPENSATION_CHANGES_LIST_KEY } from 'modules/store/product/settings/reason-for-compensation-change/constants/queries';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteReasonForCompensationChange = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('reasonForCompensationChange');
  return useMutation(() => ReasonForCompensationChangeService.delete(id), {
    onSuccess: () => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([REASON_FOR_COMPENSATION_CHANGES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
