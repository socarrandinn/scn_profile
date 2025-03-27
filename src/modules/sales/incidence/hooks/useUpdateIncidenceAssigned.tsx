import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IncidenceService } from '../services';
import { INCIDENCES_LIST_KEY } from '../constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useUpdateIncidenceAssigned = (incidenceId: string) => {
  const { t } = useTranslation('incidence');
  const queryClient = useQueryClient();

  return useMutation(
    (assignedId: string) => assignedId && IncidenceService.changeAssignation(incidenceId, assignedId),
    {
      onSuccess: ({ data }: any) => {
        toast.success(t('assignedUpdate.success'));
        queryClient.invalidateQueries([INCIDENCES_LIST_KEY]);
        queryClient.invalidateQueries(data?._id);
      },
    },
  );
};

export default useUpdateIncidenceAssigned;
