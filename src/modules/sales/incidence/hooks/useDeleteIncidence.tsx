import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IncidenceService } from 'modules/sales/incidence/services';
import { INCIDENCES_LIST_KEY } from 'modules/sales/incidence/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteIncidence = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('incidence');
  return useMutation(() => IncidenceService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([INCIDENCES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
