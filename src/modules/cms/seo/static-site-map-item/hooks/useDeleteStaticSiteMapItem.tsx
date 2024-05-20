import { useMutation, useQueryClient } from '@tanstack/react-query';
import { StaticSiteMapItemService } from 'modules/cms/seo/static-site-map-item/services';
import { STATIC_SITE_MAP_ITEMS_LIST_KEY } from 'modules/cms/seo/static-site-map-item/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { AUDIT_LOG_MODULE_ENUM } from 'modules/security/audit-logs/constants/audit-log.status';

export const useDeleteStaticSiteMapItem = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('seo');
  return useMutation(() => StaticSiteMapItemService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('static_site_map_item.successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([STATIC_SITE_MAP_ITEMS_LIST_KEY, AUDIT_LOG_MODULE_ENUM.SEO_STATIC_PAGES_MODULE]);
      queryClient.invalidateQueries([id]);
    },
  });
};
