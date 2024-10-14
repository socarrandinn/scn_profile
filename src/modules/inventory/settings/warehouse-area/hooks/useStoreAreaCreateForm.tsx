import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { warehouseAreaSchema } from 'modules/inventory/settings/warehouse-area/schemas/warehouse-area.schema';
import { IWarehouseArea } from 'modules/inventory/settings/warehouse-area/interfaces';
import { WarehouseAreaService } from 'modules/inventory/settings/warehouse-area/services';
import { WAREHOUSE_AREAS_LIST_KEY } from 'modules/inventory/settings/warehouse-area/constants';
import { useEffect } from 'react';

const initValues: IWarehouseArea = {
  name: '',
  description: '',
};

const useStoreAreaCreateForm = (onClose: () => void, defaultValues: IWarehouseArea = initValues) => {
  const { t } = useTranslation('warehouseArea');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(warehouseAreaSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (warehouseArea: IWarehouseArea) => WarehouseAreaService.saveOrUpdate(warehouseArea),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([WAREHOUSE_AREAS_LIST_KEY]);
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
