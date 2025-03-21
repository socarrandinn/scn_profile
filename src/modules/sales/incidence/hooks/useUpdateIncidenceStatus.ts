import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { INCIDENCES_LIST_KEY } from '../constants';
import { IncidenceService } from '../services';
import { INCIDENCE_STATUS_ENUM } from '../constants/incidence-status';

const useUpdateIncidenceStatus = (id: string) => {
  const { t } = useTranslation(['jobOffer', 'errors']);
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (status: INCIDENCE_STATUS_ENUM) => IncidenceService.updateStatus(id, status),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([INCIDENCES_LIST_KEY]);
        toast.success(t('successUpdate'));
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );

  return {
    updateStatus: mutate,
    isLoading,
  };
};

export default useUpdateIncidenceStatus;
