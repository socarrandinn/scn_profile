import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ProductService } from 'modules/inventory/product/services';
import { RELATED_PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { productRelatedSchema } from 'modules/inventory/product/schemas/product.schema';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { useParams } from 'react-router';

const initValues: Partial<IProductCreate> = {
  _id: '',
  related: [],
};

const useProductRelatedProducts = (onClose?: () => void, defaultValues: Partial<IProductCreate> = initValues) => {
  const { t } = useTranslation('provider');
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(productRelatedSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (related: Partial<IProductCreate>) => ProductService.updateRelatedProducts(id as string, related.related as []),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([RELATED_PRODUCTS_LIST_KEY]);
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
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
// @ts-ignore
export default useProductRelatedProducts;
