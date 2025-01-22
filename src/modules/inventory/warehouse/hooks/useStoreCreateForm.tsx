import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { warehouseSchema } from 'modules/inventory/warehouse/schemas/warehouse.schema';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { WAREHOUSES_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { useEffect } from 'react';
import { addressWithLocationInitValue, emailInitValue, phoneInitValue } from 'modules/common/constants';
import { scrollToFirstError } from 'utils/error-utils';

export const initValues: IWarehouse = {
  address: addressWithLocationInitValue,
  contacts: {
    phones: [phoneInitValue],
    emails: [emailInitValue],
  },
  logistic: null,
  // locations: undefined,
  visible: true,
  name: '',
  description: '',
};

const useStoreCreateForm = (onClose: () => void, defaultValues: IWarehouse = initValues) => {
  const { t } = useTranslation('warehouse');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch, setValue } = useForm({
    resolver: yupResolver(warehouseSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (warehouse: IWarehouse) => {
      return WarehouseService.saveOrUpdate(warehouse);
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([WAREHOUSES_LIST_KEY]);
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
    onSubmit: handleSubmit(
      (values) => {
        mutate(values);
      },
      // get scroll to first error
      (errors) => {
        scrollToFirstError(errors);
      },
    ),
  };
};
export default useStoreCreateForm;
