import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { StoreService } from 'modules/inventory/warehouse/services';
import { STORES_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { storeContactSchema } from 'modules/inventory/warehouse/schemas/store.schema';
import { IStore } from 'modules/inventory/warehouse/interfaces';

const initValues: Partial<IStore> = {
  _id: '',
  contacts: {
    emails: [],
    phones: [],
    mainEmail: '',
    mainPhone: '',
  },
};

const useStoreContactCreateForm = (onClose: () => void, defaultValues: Partial<IStore> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(storeContactSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (contacts: Partial<IStore>) => StoreService.updateContact(contacts),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([STORES_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successContactUpdate'));
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
export default useStoreContactCreateForm;
