import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TimeOffPolicyTypesService } from 'modules/inventory/product/settings/time-off-policies/services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { TIME_OFF_POLICY_TYPES_LIST_KEY } from 'modules/inventory/product/settings/time-off-policies/constants/queries';

export const useDeleteTimeOffType = (onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('timeOffType');
  return useMutation((id: string) => TimeOffPolicyTypesService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([TIME_OFF_POLICY_TYPES_LIST_KEY]);
      queryClient.invalidateQueries([data?._id]);
    },
  });
};
