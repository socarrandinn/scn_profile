import { useMutation, useQueryClient } from '@tanstack/react-query';
import { StaticSiteMapItemService } from 'modules/cms/seo/static-site-map-item/services';
import { STATIC_SITE_MAP_ITEMS_LIST_KEY } from 'modules/cms/seo/static-site-map-item/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteStaticSiteMapItem = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('staticSiteMapItem');
  return useMutation(() => StaticSiteMapItemService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([STATIC_SITE_MAP_ITEMS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
