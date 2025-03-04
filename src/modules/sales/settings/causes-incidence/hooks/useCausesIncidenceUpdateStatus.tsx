import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { CausesIncidenceService } from '../services';
import { CAUSES_INCIDENCES_LIST_KEY } from '../constants';

const useCausesIncidenceUpdateStatus = (causeId: string) => {
  const { t } = useTranslation(['causesIncidence', 'errors']);
  const queryClient = useQueryClient();

  return useMutation(
    (status: string) =>
      CausesIncidenceService.updateStatus({
        _id: causeId,
        isPublic: status === 'true',
      }),
    {
      onSuccess: ({ data }: any) => {
        toast.success(
          t('statusUpdate.success', {
            ns: 'causesIncidence',
            status: data.isPublic
              ? t('isPublic.public', { ns: 'causesIncidence' })
              : t('isPublic.private', { ns: 'causesIncidence' }),
          }),
        );
        queryClient.invalidateQueries([CAUSES_INCIDENCES_LIST_KEY]);
        queryClient.invalidateQueries(data._id);
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );
};

export default useCausesIncidenceUpdateStatus;
