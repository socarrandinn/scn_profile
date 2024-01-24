import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { productInitValue } from 'modules/inventory/product/constants/product-init-value.constant';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { productPriceSchema } from 'modules/inventory/product/schemas/product-price.schema';
// import { storeBasicSchema } from 'modules/inventory/product/schemas/product.schema';

const initValues: Partial<IProductCreate> = {
const initValues: Partial<IProductCreate> = {
  _id: '',
  priceDetails: productInitValue?.priceDetails,
};

const useProductPriceCreateForm = (onClose: () => void, defaultValues: Partial<IProductCreate> = initValues) => {
const useProductPriceCreateForm = (onClose: () => void, defaultValues: Partial<IProductCreate> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(productPriceSchema),
    resolver: yupResolver(productPriceSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (price: Partial<IProductCreate>) => ProductService.saveOrUpdate(price),
    (price: Partial<IProductCreate>) => ProductService.saveOrUpdate(price),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successBasicUpdate'));
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
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
// @ts-ignore
export default useProductPriceCreateForm;
