import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { IProductAction } from '../interfaces/IProductImport';
import { productImportSchema } from '../schemas/prodcut.import.schema';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { UploadImportProduct } from '../services';

const initValues: IProductAction = {
  job: '',
};

const useProductImportCreateForm = (onClose: () => void, defaultValues: IProductAction = initValues) => {
  const { t } = useTranslation('productUpload');
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productImportSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(UploadImportProduct.jobCurrent, {
    onSuccess: () => {
      toast.success(t('success'));
      onClose?.();
      queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
      reset();
    },
    onError: () => {
      toast.success(t('error'));
      onClose?.();
      queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
      reset();
    },
  });

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    errors,
    setValue,
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate({ job: values.job });
    }),
  };
};
export default useProductImportCreateForm;
