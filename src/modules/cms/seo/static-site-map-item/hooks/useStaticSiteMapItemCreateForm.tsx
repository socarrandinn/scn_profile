import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { staticSiteMapItemSchema } from 'modules/cms/seo/static-site-map-item/schemas/static-site-map-item.schema';
import { IStaticSiteMapItem } from 'modules/cms/seo/static-site-map-item/interfaces';
import { StaticSiteMapItemService } from 'modules/cms/seo/static-site-map-item/services';
import { STATIC_SITE_MAP_ITEMS_LIST_KEY } from 'modules/cms/seo/static-site-map-item/constants';
import { useEffect } from 'react';
import { AUDIT_LOG_MODULE_ENUM } from 'modules/security/audit-logs/constants/audit-log.status';

const initValues: IStaticSiteMapItem = {
  url: '',
  active: false,
};

const useStaticSiteMapItemCreateForm = (defaultValues: IStaticSiteMapItem = initValues, onClose?: () => void) => {
  const { t } = useTranslation('seo');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(staticSiteMapItemSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (staticSiteMapItem: IStaticSiteMapItem) => StaticSiteMapItemService.saveOrUpdate(staticSiteMapItem),
    {
      onSuccess: (data) => {
        if (data) {
          queryClient.invalidateQueries([STATIC_SITE_MAP_ITEMS_LIST_KEY]);
          queryClient.invalidateQueries([AUDIT_LOG_MODULE_ENUM.SEO_STATIC_PAGES_MODULE]);
        }
        onClose?.();
        toast.success(t(data?._id ? 'static_site_map_item.successUpdated' : 'static_site_map_item.successCreated'));
        reset();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useStaticSiteMapItemCreateForm;
