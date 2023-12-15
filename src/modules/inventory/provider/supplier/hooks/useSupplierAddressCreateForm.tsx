import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { manufactureSchema } from 'modules/inventory/provider/manufacture/schemas/manufacture.schema';
import { useEffect } from 'react';
import { ISupplier } from '../interfaces';
import { SupplierService } from '../services';
import { SUPPLIER_LIST_KEY } from '../constants';

const initValues: Partial<ISupplier> = {
  _id: '',
  address: {
    address: '',
    country: '53',
    location: {
      coordinates: [],
    },
    municipality: '',
    state: '',
    zipCode: '',
  },
};

const useSupplierAddressCreateForm = (onClose: () => void, defaultValues: Partial<ISupplier> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(manufactureSchema),
    defaultValues,
  });

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
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
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
      mutate(values);
    }),
  };
};
// @ts-ignore
export default useSupplierAddressCreateForm;
