import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReasonForJobChangeService } from 'modules/rrhh/settings/reason-for-job-change/services';
import { REASON_FOR_JOB_CHANGES_LIST_KEY } from 'modules/rrhh/settings/reason-for-job-change/constants/queries';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteReasonForJobChange = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('reasonForJobChange');
  return useMutation(() => ReasonForJobChangeService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([REASON_FOR_JOB_CHANGES_LIST_KEY]);
      queryClient.invalidateQueries(data._id);
    },
  });
};
