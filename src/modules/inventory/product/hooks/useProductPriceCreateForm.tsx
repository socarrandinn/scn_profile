import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useMemo } from 'react';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { productInitValue } from 'modules/inventory/product/constants/product-init-value.constant';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { productPriceSchema } from 'modules/inventory/product/schemas/product-price.schema';
import {
  IDistributionPrice,
  IPriceValue,
  IProductPriceDetails,
} from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { calculateFinalPrice } from 'modules/inventory/product/utils';

const initValues: Partial<IProductCreate> = {
  _id: '',
  priceDetails: productInitValue?.priceDetails,
};

const useProductPriceCreateForm = (defaultValues: Partial<IProductCreate> = initValues, onClose?: () => void) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm, formState, watch, setValue } = useForm({
    resolver: yupResolver(productPriceSchema),
    defaultValues,
  });

  const logisticPrice = watch('priceDetails.distribution.logistic');
  const shippingPrice = watch('priceDetails.distribution.shipping');
  const commercialPrice = watch('priceDetails.distribution.commercial');
  const otherCostPrice = watch('priceDetails.distribution.otherCost');
  const costVal = watch('priceDetails.distribution.cost');

  const logistic: IPriceValue = useMemo(
    () => ({
      value: logisticPrice?.value,
      type: logisticPrice?.type,
    }),
    [logisticPrice?.type, logisticPrice?.value],
  );
  const shipping: IPriceValue = useMemo(
    () => ({
      value: shippingPrice?.value,
      type: shippingPrice?.type,
    }),
    [shippingPrice?.type, shippingPrice?.value],
  );
  const commercial: IPriceValue = useMemo(
    () => ({
      value: commercialPrice?.value,
      type: commercialPrice?.type,
    }),
    [commercialPrice?.type, commercialPrice?.value],
  );

  const cost: IPriceValue = useMemo(
    () => ({
      value: costVal?.value,
      type: costVal?.type,
    }),
    [costVal?.type, costVal?.value],
  );

  const distribution: IDistributionPrice = {
    cost,
    commercial,
    shipping,
    logistic,
    otherCost: otherCostPrice,
    offer: undefined,
    platform: undefined
  };
  const editFinalPrice = calculateFinalPrice(distribution, costVal?.value);

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, error, isLoading, isSuccess, data, reset: resetMutation } = useMutation(
    (price: Partial<IProductCreate>) =>
      ProductService.updatePrice(price?._id as string, price?.priceDetails as IProductPriceDetails),
    {
      onSuccess: (_data, values) => {
        queryClient.invalidateQueries([PRODUCTS_LIST_KEY]).then();
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successBasicUpdate'));
        onClose?.();
        reset();
      },
    },
  );

  const reset = useCallback(() => {
    resetMutation();
    resetForm();
  }, [resetForm, resetMutation]);

  return {
    control,
    error,
    setValue,
    isLoading,
    isSuccess,
    watch,
    data,
    reset,
    formState,
    logisticPriceType: logisticPrice?.type,
    shippingPriceType: shippingPrice?.type,
    commercialPriceType: commercialPrice?.type,
    otherCostPrice: otherCostPrice,
    editFinalPrice,
    values: formState.errors,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useProductPriceCreateForm;
