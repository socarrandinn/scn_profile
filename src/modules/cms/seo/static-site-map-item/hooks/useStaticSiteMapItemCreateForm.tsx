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

const initValues: IStaticSiteMapItem = {
  name: '',
  description: '',
};

const useStaticSiteMapItemCreateForm = (onClose: () => void, defaultValues: IStaticSiteMapItem = initValues) => {
  const { t } = useTranslation('staticSiteMapItem');
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
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([STATIC_SITE_MAP_ITEMS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
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
