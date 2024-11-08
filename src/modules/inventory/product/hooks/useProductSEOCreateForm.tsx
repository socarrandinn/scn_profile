import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { productSEOSchema } from 'modules/inventory/product/schemas/product.schema';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';

const initValues: Partial<IProductCreate> = {
  _id: '',
  seo: {
    name: '',
    description: '',
    image: { _id: '', thumb: '', url: '', width: 0 },
  },
  slug: '',
};

const useProductSEOCreateForm = (defaultValues: Partial<IProductCreate> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch } = useForm({
    resolver: yupResolver(productSEOSchema),
    defaultValues,
  });

  const seoTitle = watch?.('seo.name');
  const seoDescription = watch?.('seo.description');
  const slugDescription = watch?.('slug');

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (payload: Partial<IProductCreate>) => ProductService.updateSeo(payload),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successBasicUpdate'));
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
    formState,
    seoTitle,
    seoDescription,
    slugDescription,
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

// @ts-ignore
export default useProductSEOCreateForm;
