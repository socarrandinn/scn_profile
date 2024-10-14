import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { storeSchema } from 'modules/inventory/warehouse/schemas/store.schema';
import { IStore, StoreLocation } from 'modules/inventory/warehouse/interfaces';
import { StoreService } from 'modules/inventory/warehouse/services';
import { STORES_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { useEffect } from 'react';
import { addressWithLocationInitValue, emailInitValue, phoneInitValue } from 'modules/common/constants';

export const initValues: IStore = {
  address: addressWithLocationInitValue,
  contacts: {
    phones: [phoneInitValue],
    emails: [emailInitValue],
  },
  logistic: null,
  locations: undefined,
  visible: true,
  name: '',
  description: '',
};

const useStoreCreateForm = (onClose: () => void, defaultValues: IStore = initValues) => {
  const { t } = useTranslation('warehouse');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch, setValue } = useForm({
    resolver: yupResolver(storeSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (store: IStore) => {
      return StoreService.saveOrUpdate(store);
    },
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
    setValue,
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      const transformedLocations: StoreLocation[] = [];

      const country = values.locations && values.locations[0]?.country;
      const states = values.locations?.flatMap((location) => location.state);

      if (country && states) {
        // @ts-ignore
        transformedLocations.push({ country, states });
      }

      values.locations = transformedLocations;

      mutate(values);
    }),
  };
};
export default useStoreCreateForm;
