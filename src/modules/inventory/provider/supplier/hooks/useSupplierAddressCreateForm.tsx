import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { SupplierService } from '../services';
import { SUPPLIER_LIST_KEY } from '../constants';
import { supplierAddressSchema } from '../schemas/supplier.schema';
import { ISupplier } from '../interfaces';
import { formatedAddressObjUtils } from 'modules/common/utils/formated-utils';
import { ADDRESS_INIT_VALUE } from 'modules/common/constants';

const initValues: Partial<ISupplier> = {
  _id: '',
  address: ADDRESS_INIT_VALUE,
};

const useSupplierAddressCreateForm = (
  countryCode: string,
  onClose: () => void,
  defaultValues: Partial<ISupplier> = initValues,
) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch, setValue } = useForm({
    resolver: yupResolver(supplierAddressSchema),
    defaultValues,
  });

  const address1 = watch('address.address1');
  const address2 = watch('address.address2');
  const city = watch('address.city');
  const state = watch('address.state');
  const houseNumber = watch('address.houseNumber');
  const formattedAddress = watch('address.formattedAddress');

  useEffect(() => {
    if (countryCode === 'CU') {
      setValue('address.formattedAddress', formatedAddressObjUtils(address1, houseNumber, address2, city, state));
    }
  }, [address1, address2, city, countryCode, formattedAddress, houseNumber, setValue, state]);

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (address: Partial<ISupplier>) => SupplierService.saveOrUpdate(address),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([SUPPLIER_LIST_KEY]);
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
    formState,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
// @ts-ignore
export default useSupplierAddressCreateForm;
