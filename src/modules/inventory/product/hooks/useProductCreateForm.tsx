import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PRODUCT_LIST_KEY } from 'modules/inventory/product/constants/query-keys';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { productSchema } from 'modules/inventory/product/schemas/product.schema';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { productInitValue } from 'modules/inventory/product/constants/product-init-value.constant';
import { ProductService } from 'modules/inventory/product/services';

const useProductCreateForm = (onClose: () => void, defaultValues: IProductCreate = productInitValue) => {
  const { t } = useTranslation('product');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, getValues, watch, setValue, formState, resetField } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const places = watch('shippingInfo.rules.place');
  const seoTitle = watch('name');

  const handleLimitByOrder = (isActive: boolean) => {
    setValue('rules.limitByOrder', isActive ? 0 : 1);
  };

  const addPlace = (newPlace: any) => {
    setValue('shippingInfo.rules.place', [...places, newPlace]);
  };

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
    resetField,
    handleLimitByOrder,
    addPlace,
    seoTitle,
    values: getValues(),
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useProductCreateForm;
