import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { productDiscountSchema } from 'modules/sales-offer/product-discount/schemas/product-discount.schema';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';
import { ProductDiscountService } from 'modules/sales-offer/product-discount/services';
import { PRODUCT_DISCOUNTS_LIST_KEY } from 'modules/sales-offer/product-discount/constants';
import { useEffect } from 'react';

const initValues: IProductDiscount = {
  name: '',
  description: '',
};

const useProductDiscountCreateForm = (onClose: () => void, defaultValues: IProductDiscount = initValues) => {
  const { t } = useTranslation('productDiscount');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(productDiscountSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (productDiscount: IProductDiscount) => ProductDiscountService.saveOrUpdate(productDiscount),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([PRODUCT_DISCOUNTS_LIST_KEY]);
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
export default useProductDiscountCreateForm;
