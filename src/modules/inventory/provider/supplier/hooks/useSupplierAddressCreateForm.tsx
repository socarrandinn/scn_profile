import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { SupplierService } from '../services';
import { SUPPLIER_LIST_KEY } from '../constants';
import { supplierAddressSchema } from '../schemas/supplier.schema';
import { ISupplier } from '../interfaces';

const initValues: Partial<ISupplier> = {
  _id: '',
  address: {
    address: '',
    country: '53',
    municipality: '',
    state: '',
    zipCode: '',
  },
};

const useSupplierAddressCreateForm = (onClose: () => void, defaultValues: Partial<ISupplier> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch } = useForm({
    resolver: yupResolver(supplierAddressSchema),
    defaultValues,
  });
  const state = watch('address.state');

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (address: Partial<ISupplier>) => SupplierService.saveOrUpdate(address),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([SUPPLIER_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successAddressUpdate'));
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
    state,
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
// @ts-ignore
export default useSupplierAddressCreateForm;
