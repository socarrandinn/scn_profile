import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WorkLocationService } from 'modules/store/employee/settings/work-location/services';
import { WORK_LOCATIONS_LIST_KEY } from 'modules/store/employee/settings/work-location/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteWorkLocation = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('workLocation');
  return useMutation(() => WorkLocationService.delete(id), {
    onSuccess: () => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([WORK_LOCATIONS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
