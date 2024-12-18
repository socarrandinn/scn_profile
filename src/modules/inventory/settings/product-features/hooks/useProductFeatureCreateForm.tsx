import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect, useCallback } from 'react';
import { IProductFeature, PRODUCT_FEATURE_TYPE_ENUM } from '../interfaces/IProductFeature';
import { productFeatureSchema } from '../schemas/product-feature.schema';
import { ProductFeatureService } from '../services';
import { PRODUCT_FEATURE_LIST_KEY } from '../constants';

const initValues: IProductFeature = {
  name: '',
  type: PRODUCT_FEATURE_TYPE_ENUM.STRING,
  isMultiValue: false,
  values: [],
};

const useProductFeatureCreateForm = (onClose: () => void, defaultValues: IProductFeature = initValues) => {
  const { t } = useTranslation('productFeatures');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    formState
  } = useForm({
    resolver: yupResolver(productFeatureSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const {
    mutate,
    reset: resetMutation,
    error,
    isLoading,
    isSuccess,

    data,
  } = useMutation((tags: IProductFeature) => ProductFeatureService.saveOrUpdate(tags), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([PRODUCT_FEATURE_LIST_KEY]);
      values?._id && queryClient.invalidateQueries([values._id]);
      toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
      onClose?.();
      resetForm();
    },
  });

  const reset = useCallback(() => {
    resetForm();
    resetMutation();
  }, [resetForm, resetMutation]);

  return {
    control,
    formState,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    onSubmit: handleSubmit((values) => {
      const { type, values: array, ...rest } = values;
      mutate({
        ...rest,
        type,
        values: [PRODUCT_FEATURE_TYPE_ENUM.ARRAY, PRODUCT_FEATURE_TYPE_ENUM.COLOR].includes(type) ? array : [],
      });
    }),
  };
};
export default useProductFeatureCreateForm;
