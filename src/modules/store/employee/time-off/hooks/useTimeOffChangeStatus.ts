import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import TimeOffService from 'modules/store/employee/time-off/services/time-off.service';
import toast from 'react-hot-toast';
import { TIME_OFF_LIST_KEY } from 'modules/store/employee/time-off/constants/time-off.queries';
import { TimeOffStatusEnum } from 'modules/store/employee/time-off/constants/time-off-status.enum';

export const useTimeOffChangeStatus = (timeOffId: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('timeOff');
  return useMutation((status: TimeOffStatusEnum) => TimeOffService.updateStatus(timeOffId, status),
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
