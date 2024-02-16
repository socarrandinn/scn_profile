import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CausesIncidenceService } from 'modules/sales/settings/causes-incidence/services';
import { CAUSES_INCIDENCES_LIST_KEY } from 'modules/sales/settings/causes-incidence/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteCausesIncidence = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('causesIncidence');
  return useMutation(() => CausesIncidenceService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([CAUSES_INCIDENCES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
