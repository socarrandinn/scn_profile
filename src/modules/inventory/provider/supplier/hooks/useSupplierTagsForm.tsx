import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { SupplierService } from '../services';
import { SUPPLIER_LIST_KEY } from '../constants';
import { supplierTagsSchema } from '../schemas/supplier.schema';
import { ISupplier } from '../interfaces';

const initValues: Partial<ISupplier> = {
  tags: null,
  selectedTag: [],
};

const useSupplierTagsForm = (onClose: () => void, defaultValues: Partial<ISupplier> = initValues) => {
  const { t } = useTranslation('supplier');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch, setValue } = useForm({
    resolver: yupResolver(supplierTagsSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // check tags
  const tags = watch('tags');
  useEffect(() => {
    if (tags) {
      setValue('selectedTag', tags);
    }
  }, [setValue, tags]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (address: Partial<ISupplier>) => SupplierService.updateTags(address),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([SUPPLIER_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successUpdate'));
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
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      const { _id, tags } = values;
      mutate({ _id, tags });
    }),
  };
};
// @ts-ignore
export default useSupplierTagsForm;
