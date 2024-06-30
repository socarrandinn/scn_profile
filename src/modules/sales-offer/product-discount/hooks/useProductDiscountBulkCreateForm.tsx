import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { DISCOUNT_TYPE, PRODUCT_DISCOUNTS_LIST_KEY } from '../constants';
import { IProductDiscount } from '../interfaces';
import { productDiscountSchema } from '../schemas/product-discount.schema';
import { ProductDiscountService } from '../services';

const initValues: IProductDiscount = {
  name: '',
  enabled: false,
  discountType: DISCOUNT_TYPE.FIXED,
  startDate: null,
  endDate: null,
  discount: 0,
  filters: null
};

const useProductDiscountBulkCreateForm = (
  onClose: () => void,
  defaultValues: IProductDiscount = initValues,
  filters?: any
) => {
  const { t } = useTranslation('productDiscount');
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch, setValue } = useForm({
    resolver: yupResolver(productDiscountSchema),
    defaultValues,
  });

  const offerDiscount = watch('discount');
  const discountType = watch('discountType');

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  useEffect(() => {
    if (!offerDiscount) setValue('discount', 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discountType, setValue]);

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
        navigate(`/sales/offers/settings/product_discounts/${ data?._id }/details`);
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    discountType,
    offerDiscount,
    data,
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate({
        ...values,
        filters
      });
    }),
  };
};
export default useProductDiscountBulkCreateForm;
