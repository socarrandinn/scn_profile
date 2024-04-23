import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { StoreService } from 'modules/inventory/store/services';
import { STORES_LIST_KEY } from 'modules/inventory/store/constants';
import { storeAddressSchema } from 'modules/inventory/store/schemas/store.schema';
import { IStore } from 'modules/inventory/store/interfaces';

const initValues: Partial<IStore> = {
  _id: '',
  address: {
    street: '',
    number: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
  },
};

const useStoreAddressCreateForm = (onClose: () => void, defaultValues: Partial<IStore> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch } = useForm({
    resolver: yupResolver(storeAddressSchema),
    defaultValues,
  });
  const state = watch('address.state');

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (address: Partial<IStore>) => StoreService.saveOrUpdate(address),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([STORES_LIST_KEY]);
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
export default useStoreAddressCreateForm;
