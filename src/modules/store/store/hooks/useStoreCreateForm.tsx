import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { storeSchema } from 'modules/store/store/schemas/store.schema';
import { IStore } from 'modules/store/store/interfaces';
import { StoreService } from 'modules/store/store/services';
import { STORES_LIST_KEY } from 'modules/store/store/constants';
import { useEffect } from 'react';
import { addressWithLocationInitValue } from 'modules/common/constants';

const initValues: IStore = {
  address: addressWithLocationInitValue,
  contacts: {
    emails: [],
    mainEmail: '',
    mainPhone: '',
    phones: []
  },
  logistic: null,
  visible: true,
  name: '',
  description: ''
};

const useStoreCreateForm = (onClose: () => void, defaultValues: IStore = initValues) => {
  const { t } = useTranslation('store');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
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
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useStoreCreateForm;
