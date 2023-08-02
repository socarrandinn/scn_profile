import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { ReasonForJobChangeService } from 'modules/store/product/settings/reason-for-job-change/services';
import { REASON_FOR_JOB_CHANGES_LIST_KEY } from 'modules/store/product/settings/reason-for-job-change/constants/queries';

export const useDeleteManyReasonForJobChanges = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('reasonForJobChange');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) return ReasonForJobChangeService.deleteMany(selected as string[]);
      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedMany'));
        clearSelection();
        queryClient.invalidateQueries([REASON_FOR_JOB_CHANGES_LIST_KEY]);
      },
      onError: (error: any) => {
        if (error.reference === 'MD000') toast.error(t('common:errors.needSelection'));
        else {
          toast.error(t('common:errors.generalErrorMessage'));
        }
      },
    },
  );
};
