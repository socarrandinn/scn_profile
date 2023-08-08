import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { storeSchema } from 'modules/inventory/store/schemas/store.schema';
import { IStore } from 'modules/inventory/store/interfaces';
import { StoreService } from 'modules/inventory/store/services';
import { STORES_LIST_KEY } from 'modules/inventory/store/constants';
import { useEffect } from 'react';
import { addressWithLocationInitValue, emailInitValue, phoneInitValue } from 'modules/common/constants';

const initValues: IStore = {
  address: addressWithLocationInitValue,
  contacts: {
    phones: [phoneInitValue],
    emails: [emailInitValue],
  },
  logistic: null,
  locations: [],
  visible: true,
  name: '',
  description: ''
};

const useStoreCreateForm = (onClose: () => void, defaultValues: IStore = initValues) => {
  const { t } = useTranslation('store');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch } = useForm({
    resolver: yupResolver(storeSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (store: IStore) => StoreService.saveOrUpdate(store),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([STORES_LIST_KEY]);
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
    watch,
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useStoreCreateForm;
