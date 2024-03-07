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
import { IDistributionPrice, IPriceValue } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { calculateFinalPrice } from 'modules/inventory/product/utils';

const initValues: Partial<IProductCreate> = {
  _id: '',
  priceDetails: productInitValue?.priceDetails,
};

const useProductPriceCreateForm = (defaultValues: Partial<IProductCreate> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch } = useForm({
    resolver: yupResolver(productPriceSchema),
    defaultValues,
  });

  const { type: logisticPriceType, value: logisticPriceValue } = watch?.('priceDetails.distribution.logistic');
  const { type: shippingPriceType, value: shippingPriceValue } = watch?.('priceDetails.distribution.shipping');
  const { type: commercialPriceType, value: commercialPriceValue } = watch?.('priceDetails.distribution.commercial');
  const { type: otherCostPriceType, value: otherCostPriceValue } = watch?.('priceDetails.distribution.otherCost');
  const { type: costType, value: costValue } = watch?.('priceDetails.distribution.cost');

  const logistic: IPriceValue = {
    value: logisticPriceValue,
    type: logisticPriceType,
  };
  const shipping: IPriceValue = {
    value: shippingPriceValue,
    type: shippingPriceType,
  };
  const commercial: IPriceValue = {
    value: commercialPriceValue,
    type: commercialPriceType,
  };
  const otherCost: IPriceValue = {
    value: otherCostPriceValue,
    type: otherCostPriceType,
  };
  const cost: IPriceValue = {
    value: costValue,
    type: costType,
  };
  const offer: IPriceValue = {
    value: 0,
    type: otherCostPriceType,
  };
  const platform: IPriceValue = {
    value: 0,
    type: otherCostPriceType,
  };

  const destrubution: IDistributionPrice = {
    cost,
    otherCost,
    commercial,
    shipping,
    logistic,
    offer,
    platform,
  };
  const editFinalPrice = calculateFinalPrice(destrubution, costValue);

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (price: Partial<IProductCreate>) => ProductService.updatePrice(price._id as string, price.priceDetails),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successBasicUpdate'));
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
    logisticPriceType,
    shippingPriceType,
    commercialPriceType,
    otherCostPriceType,
    editFinalPrice,
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
// @ts-ignore
export default useProductPriceCreateForm;
