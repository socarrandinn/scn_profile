import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_ONE_KEY, RELATED_PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { useParams } from 'react-router';
import { RELATED_PRODUCTS_ACTION } from '../constants/related-products.enum';

const initValues: Partial<IProductCreate> = {
  _id: '',
  related: [],
};

const useUpdateRelatedProducts = (defaultValues: any = initValues, status: RELATED_PRODUCTS_ACTION, onClose?: () => void) => {
  const { t } = useTranslation('provider');
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm, formState } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, error, isLoading, isSuccess, data, reset: resetMutation } = useMutation(
    (related: Partial<IProductCreate>) => ProductService.updateRelatedProducts(id as string, related?.related || [], status),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([RELATED_PRODUCTS_LIST_KEY]);
        queryClient.invalidateQueries([id, PRODUCTS_ONE_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successBasicUpdate'));
        onClose?.();
        resetForm();
      },
    },
  );

  const reset = useCallback(() => {
    resetForm();
    resetMutation();
  }, [resetForm, resetMutation]);

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    mutate,
    values: formState.errors,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useUpdateRelatedProducts;
