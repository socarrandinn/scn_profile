import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useTableSelection } from '@dfl/mui-admin-layout';
import { DisallowedWordService } from 'modules/crm/settings/disallowed-word/services';
import { DISALLOWED_WORDS_LIST_KEY } from 'modules/crm/settings/disallowed-word/constants';

export const useDeleteManyDisallowedWords = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('disallowedWord');
  const { selected, clearSelection } = useTableSelection();

  return useMutation(
    () => {
      if (selected && selected?.length) return DisallowedWordService.deleteMany(selected as string[]);
      return Promise.reject({ message: t('deleteMany'), reference: 'MD000' });
    },
    {
      onSuccess: () => {
        toast.success(t('successDeletedMany'));
        clearSelection();
        queryClient.invalidateQueries([DISALLOWED_WORDS_LIST_KEY]);
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
