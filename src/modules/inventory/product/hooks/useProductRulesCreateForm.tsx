import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { productInitValue } from 'modules/inventory/product/constants/product-init-value.constant';
import { productRulesSchema } from 'modules/inventory/product/schemas/product.schema';
import { IProductCreate } from '../interfaces/IProductCreate';

const initValues: Partial<IProductCreate> = {
  _id: '',
  rules: productInitValue.rules,
};

const useProductShippingInfoCreateForm = (onClose: () => void, defaultValues: Partial<IProductCreate> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, setValue } = useForm({
    resolver: yupResolver(productRulesSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const handleLimitByOrder = (isActive: boolean) => {
    setValue('rules.limitByOrder', isActive ? 0 : 1);
  };

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (payload: Partial<IProductCreate>) => ProductService.updateRules(payload),
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
    handleLimitByOrder,
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
// @ts-ignore
export default useProductShippingInfoCreateForm;
