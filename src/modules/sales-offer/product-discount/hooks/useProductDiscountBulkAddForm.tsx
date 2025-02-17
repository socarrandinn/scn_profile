import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_DISCOUNTS_LIST_KEY } from '../constants';
import { IProductDiscountAdd } from '../interfaces';
import { productDiscountBulkAddSchema } from '../schemas/product-discount.schema';
import { ProductDiscountService } from '../services';

const initValues: IProductDiscountAdd = {
  productDiscount: null,
  filters: {},
};

const useProductDiscountBulkAddForm = (
  onClose: () => void,
  defaultValues: IProductDiscountAdd = initValues,
  filters: any,
) => {
  const { t } = useTranslation('productDiscount');
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(productDiscountBulkAddSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (values: IProductDiscountAdd) => {
      return ProductDiscountService.addProduct(values?.productDiscount as string, values.filters);
    },
    {
      onSuccess: (data: any, values: IProductDiscountAdd) => {
        queryClient.invalidateQueries([PRODUCT_DISCOUNTS_LIST_KEY]);
        data?._id && queryClient.invalidateQueries([data._id]);
        data?._id && toast.success(t('successUpdate'));
        onClose?.();
        reset();
        navigate(
          `/sales/offers/settings/product_discounts/${(data?._id || values?.productDiscount) as string}/details`,
        );
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
      mutate({
        ...values,
        filters,
      });
    }),
  };
};
export default useProductDiscountBulkAddForm;
