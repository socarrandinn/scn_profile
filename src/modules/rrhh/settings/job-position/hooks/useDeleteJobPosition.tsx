import { useMutation, useQueryClient } from '@tanstack/react-query';
import { JobPositionService } from 'modules/rrhh/settings/job-position/services';
import { JOB_POSITIONS_LIST_KEY } from 'modules/rrhh/settings/job-position/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteJobPosition = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('jobPosition');
  return useMutation(() => JobPositionService.delete(id), {
    onSuccess: () => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([JOB_POSITIONS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
