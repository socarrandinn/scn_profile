import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TestimonyService } from 'modules/cms/testimony/services';
import { TESTIMONIES_LIST_KEY } from 'modules/cms/testimony/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteTestimony = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('testimony');
  return useMutation(() => TestimonyService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([TESTIMONIES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
