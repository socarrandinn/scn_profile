import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { ReasonForCompensationChangeService } from 'modules/inventory/product/settings/reason-for-compensation-change/services';
import { REASON_FOR_COMPENSATION_CHANGES_LIST_KEY } from 'modules/inventory/product/settings/reason-for-compensation-change/constants/queries';

export const useDeleteManyReasonForCompensationChanges = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('reasonForCompensationChange');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) return ReasonForCompensationChangeService.deleteMany(selected as string[]);
      return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedMany'));
        clearSelection();
        queryClient.invalidateQueries([REASON_FOR_COMPENSATION_CHANGES_LIST_KEY]);
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
