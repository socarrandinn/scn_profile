import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { TagsService } from '../services';
import { TAGS_LIST_KEY } from '../constants';
import { TAG_RULES_ENUM } from '../constants/tags-status';

const useTagUpdateStatus = (tagId: string, rule: TAG_RULES_ENUM) => {
  const { t } = useTranslation(['tags', 'errors']);
  const queryClient = useQueryClient();

  return useMutation(
    (status: string) =>
      TagsService.updateStatus({
        _id: tagId,
        // @ts-ignore
        rules: {
          [rule]: { required: status === 'true' },
        },
      }),
    {
      onSuccess: ({ data }: any) => {
        toast.success(
          t('required.message', {
            ns: 'tags',
            status: data.isRequiredForProducts
              ? t('required.true', { ns: 'tags' })
              : t('required.false', { ns: 'tags' }),
          }),
        );
        queryClient.invalidateQueries([TAGS_LIST_KEY]);
        queryClient.invalidateQueries(data._id);
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );
};

export default useTagUpdateStatus;
