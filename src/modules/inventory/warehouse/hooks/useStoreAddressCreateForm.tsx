import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { WAREHOUSES_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { warehouseAddressSchema } from 'modules/inventory/warehouse/schemas/warehouse.schema';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';

const initValues: Partial<IWarehouse> = {
  _id: '',
  address: {
    address1: '',
    address2: '',
    houseNumber: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
  },
};

const useStoreAddressCreateForm = (onClose: () => void, defaultValues: Partial<IWarehouse> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset, formState, watch, setValue, clearErrors } = useForm({
    resolver: yupResolver(warehouseAddressSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (address: Partial<IWarehouse>) => WarehouseService.updateAddress(address),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([WAREHOUSES_LIST_KEY]);
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
    watch,
    setValue,
    formState,
    clearErrors,
    values: formState.errors,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
// @ts-ignore
export default useStoreAddressCreateForm;
