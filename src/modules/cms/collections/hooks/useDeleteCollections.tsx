import { useMutation, useQueryClient } from '@tanstack/react-query';
import { COLLECTIONS_LIST_KEY } from 'modules/cms/collections/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { CollectionService } from '../utils/service';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

export const useDeleteCollections = (
  id: string,
  onClose: () => void,
  contentType: COLLECTION_CONTENT_TYPE,
  onRedirect?: boolean,
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t } = useTranslation('collection');
  return useMutation(() => CollectionService[contentType].delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([COLLECTIONS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
      if (onRedirect) {
        navigate('/cms/collections');
      }
    },
  });
};
