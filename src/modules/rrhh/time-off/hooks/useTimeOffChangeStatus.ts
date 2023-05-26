import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import TimeOffService from 'modules/rrhh/time-off/services/time-off.service';
import toast from 'react-hot-toast';
import { TIME_OFF_LIST_KEY } from 'modules/rrhh/time-off/constants/time-off.queries';

export const useTimeOffChangeStatus = (timeOffId: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('timeOff');
  return useMutation(
    async (params: Record<string, any>) => {
      TimeOffService.updateStatus({
        _id: timeOffId,
        ...(params || {}),
      });
    },
    {
      onSuccess: (data) => {
        toast.success(t('successDeleted'));
        onClose?.();
        queryClient.invalidateQueries([TIME_OFF_LIST_KEY]);
        queryClient.invalidateQueries([timeOffId]);
      },
    },
  );
};
