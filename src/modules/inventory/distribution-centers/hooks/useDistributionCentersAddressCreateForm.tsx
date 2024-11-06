import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTERS_ONE_KEY } from 'modules/inventory/distribution-centers/constants';
import { warehouseAddressSchema } from 'modules/inventory/warehouse/schemas/warehouse.schema';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces/IDistributionCenters';

const initValues: Partial<IDistributionCenters> = {
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

const useDistributionCentersAddressCreateForm = (onClose: () => void, defaultValues: Partial<IDistributionCenters> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch, setValue } = useForm({
    resolver: yupResolver(warehouseAddressSchema),
    defaultValues,
  });
  const state = watch('address.state');

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (address: Partial<IDistributionCenters>) => DistributionCentersService.updateAddress(address),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([DISTRIBUTION_CENTERS_ONE_KEY]);
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
    watch,
    setValue,
    values: formState.errors,
    formState,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useDistributionCentersAddressCreateForm;
