import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { PRODUCT_LIST_KEY } from 'modules/store/product/constants/query-keys';
import { IProduct } from 'modules/store/product/interfaces/IProduct';
import { productInitValue } from '../constants/product-init-value.constant';
import { productSchema } from 'modules/store/product/schemas/product.schema';
import { ProductService } from '../services';
import { IProductFormValues } from 'modules/store/product/interfaces/IProductFormValues';
import { payloadAdapterCreate } from 'modules/store/product/helpers';

const useProductCreateForm = (onClose: () => void, defaultValues: IProductFormValues = productInitValue) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, getValues, watch, setValue, formState } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (product: IProductFormValues) => ProductService.save(payloadAdapterCreate(product)),
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
