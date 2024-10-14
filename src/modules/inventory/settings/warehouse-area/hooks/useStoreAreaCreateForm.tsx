import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { storeAreaSchema } from 'modules/inventory/settings/warehouse-area/schemas/store-area.schema';
import { IStoreArea } from 'modules/inventory/settings/warehouse-area/interfaces';
import { WarehouseAreaService } from 'modules/inventory/settings/warehouse-area/services';
import { STORE_AREAS_LIST_KEY } from 'modules/inventory/settings/warehouse-area/constants';
import { useEffect } from 'react';

const initValues: IStoreArea = {
  name: '',
  description: '',
};

const useStoreAreaCreateForm = (onClose: () => void, defaultValues: IStoreArea = initValues) => {
  const { t } = useTranslation('storeArea');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(storeAreaSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (storeArea: IStoreArea) => WarehouseAreaService.saveOrUpdate(storeArea),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([STORE_AREAS_LIST_KEY]);
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
export default useStoreAreaCreateForm;
