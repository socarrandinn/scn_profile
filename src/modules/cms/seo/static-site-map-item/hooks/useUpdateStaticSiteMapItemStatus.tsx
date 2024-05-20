import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { StaticSiteMapItemService } from '../services';
import { STATIC_SITE_MAP_ITEMS_LIST_KEY } from '../constants';

const useUpdateStaticSiteMapItemStatus = (itemId: string) => {
  const { t } = useTranslation('seo');
  const queryClient = useQueryClient();

  return useMutation(
    (active: string) => StaticSiteMapItemService.saveOrUpdate({ _id: itemId, active: active === 'true' }),
    {
      onSuccess: ({ data }: any) => {
        toast.success(t(data?.active ? 'statusUpdate.success' : 'statusUpdate.success'));
        queryClient.invalidateQueries([STATIC_SITE_MAP_ITEMS_LIST_KEY]);
        queryClient.invalidateQueries(data._id);
      },
    },
  );
};

export default useUpdateStaticSiteMapItemStatus;
