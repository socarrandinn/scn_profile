import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { IShipping } from '../interfaces/IOrder';
import { useTranslation } from 'react-i18next';
import { shippingSchema } from '../schemas/order-shipping.schema';
import { PaidOrderService } from 'modules/sales/paid-order/services';
import { PAID_ORDERS_LIST_KEY } from 'modules/sales/paid-order/constants';

const initValues: Partial<IShipping> = {
  address: {
    city: '',
    country: '53',
    houseNumber: '',
    state: '',
    address1: '',
    address2: '',
    zipCode: '',
  },
  person: {
    firstName: '',
    lastName: '',
    identityNumber: '',
    contactId: '',
    email: '',
    phone: '',
  },
  note: '',
};

const useOrderShippingForm = (
  orderId: string | undefined,
  onClose: () => void,
  defaultValues: Partial<IShipping> = initValues,
) => {
  const { t } = useTranslation('order');
  const { control, handleSubmit, reset, getValues, formState, setValue } = useForm({
    resolver: yupResolver(shippingSchema),
    defaultValues,
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation((values: Partial<IShipping>) => PaidOrderService.updateShipping(orderId, values), {
    onSuccess: () => {
      queryClient.invalidateQueries([PAID_ORDERS_LIST_KEY]).then();
      queryClient.invalidateQueries([orderId]).then();
      toast.success(t('successUpdate'));
      onClose?.();
      reset();
    },
  });

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    getValues,
    setValue,
    errors: formState.errors,
    reset: () => {
      resetMutation();
      reset();
    },
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
    onSubmitWithValid: handleSubmit((values) => {
      mutate({ ...values, ...{ verification: { isValid: true, note: '' } } });
    }),
  };
};

export default useOrderShippingForm;
