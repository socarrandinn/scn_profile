import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PRODUCT_LIST_KEY } from 'modules/inventory/product/constants/query-keys';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { productInitValue } from '../constants/product-init-value.constant';
import { productSchema } from 'modules/inventory/product/schemas/product.schema';
import { ProductService } from '../services';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';

const useProductCreateForm = (onClose: () => void, defaultValues: IProductCreate = productInitValue) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, getValues, watch, setValue, formState } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues,
  });
  const values = useWatch({ control });
  console.log({ values });
  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (product: IProductCreate) => ProductService.save(product),
    {
      onSuccess: (data: IProduct, values) => {
        queryClient.invalidateQueries([PRODUCT_LIST_KEY]);
        toast.success(t('successCreated'));
        onClose?.();
        reset();
      },
      onError: (data: any) => {
        console.log('Error', error);
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
    watch,
    formState,
    setValue,
    values: getValues(),
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useProductCreateForm;
