import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { productScoreSchema } from 'modules/inventory/product/schemas/product.schema';
import { IProductCreate } from '../interfaces/IProductCreate';

const initValues: Partial<IProductCreate> = {
  _id: '',
  score: 0,
};

const useProductScoreCreateForm = (onClose: () => void, defaultValues: Partial<IProductCreate> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(productScoreSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (payload: Partial<IProductCreate>) => ProductService.updateScore(payload),
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
    formState,
    values: formState.errors,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useProductScoreCreateForm;
