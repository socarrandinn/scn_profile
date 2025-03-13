import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IPaymentMethod } from 'modules/sales/settings/payment-settings/interfaces';
import { PaymentMethodsService } from 'modules/sales/settings/payment-settings/services';
import { PAYMENT_METHOD_LIST_KEY, PAYMENT_SETTINGS_LIST_KEY } from 'modules/sales/settings/payment-settings/constants';
import { useEffect, useCallback } from 'react';
import { PAYMENT_GATEWAYS_ENUM, PAYMENT_METHOD_ENUM } from 'modules/sales/common/constants/order-payments';
import { PRICE_TYPE } from 'modules/inventory/common/constants/price-type.enum';
import { yupResolver } from '@hookform/resolvers/yup';
import { paymentMethodSchema } from '../schemas/payment-settings.schema';

const initValues: IPaymentMethod = {
  methodType: PAYMENT_METHOD_ENUM.CREDIT_CARD,
  enabled: false,
  settings: {
    minAmount: 0,
    maxAmount: 0,
    currency: [],
    tax: {
      type: PRICE_TYPE.FIXED,
      value: 0
    },
    gatewayConfig: [{
      currency: [],
      gateway: PAYMENT_GATEWAYS_ENUM.STRIPE,
      enabled: false,
    }]
  }
};

const usePaymentMethodCreateForm = (defaultValues: IPaymentMethod = initValues, onClose?: () => void) => {
  const { t } = useTranslation('paymentSettings');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm, watch, formState } = useForm({
    resolver: yupResolver(paymentMethodSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, reset: resetMutation, error, isLoading, isSuccess, data } = useMutation(
    (paymentSettings: IPaymentMethod) => PaymentMethodsService.saveOrUpdate(paymentSettings),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([PAYMENT_METHOD_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
        resetForm();
      },
    },
  );

  const reset = useCallback(
    () => {
      resetForm()
      resetMutation()
    },
    [resetForm, resetMutation],
  )


  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    watch,
    formState,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default usePaymentMethodCreateForm;
