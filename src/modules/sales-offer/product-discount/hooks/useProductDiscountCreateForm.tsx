import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DISCOUNT_TYPE, PRODUCT_DISCOUNTS_LIST_KEY } from 'modules/sales-offer/product-discount/constants';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';
import { productDiscountSchema } from 'modules/sales-offer/product-discount/schemas/product-discount.schema';
import { ProductDiscountService } from 'modules/sales-offer/product-discount/services';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const initValues: IProductDiscount = {
  name: '',
  discountType: DISCOUNT_TYPE.PERCENTAGE,
  discount: 0,
  startDate: null,
  endDate: null,
  enabled: false
};

const useProductDiscountCreateForm = (onClose: () => void, defaultValues: IProductDiscount = initValues) => {
  const { t } = useTranslation('productDiscount');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch } = useForm({
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
    watch,
    discountType: watch('discountType')
  };
};
export default useProductDiscountCreateForm;
