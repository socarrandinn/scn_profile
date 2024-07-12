import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { productShippingInfoSchema } from 'modules/inventory/product/schemas/product-shipping.schema';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';

export const initShippingInfoValues: Partial<IProductCreate> = {
  _id: '',
  shippingSettings: {
    shippingInfo: { height: 0, length: 0, weight: 0, width: 0, fragile: false, needRefrigeration: false },
  },
};

const useProductShippingInfoCreateForm = (
  onClose: () => void,
  defaultValues: Partial<IProductCreate> = initShippingInfoValues,
) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(productShippingInfoSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (payload: Partial<IProductCreate>) => ProductService.updateShippingInfo(payload),
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
export default useProductShippingInfoCreateForm;
