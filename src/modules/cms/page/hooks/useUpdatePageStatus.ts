import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PAGE_STATUS_ENUM } from '../constants/page-status';
import { PageService } from '../services';
import { PAGES_LIST_KEY } from '../constants';

const useUpdatePageStatus = (id: string) => {
  const { t } = useTranslation('pages');
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (status: PAGE_STATUS_ENUM) => PageService.updateStatus(id, status),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([PAGES_LIST_KEY]);
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

export default useUpdatePageStatus;
