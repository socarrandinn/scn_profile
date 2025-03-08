import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { paymentSettingsSchema } from 'modules/sales/settings/payment-settings/schemas/payment-settings.schema';
import { IPaymentSettings } from 'modules/sales/settings/payment-settings/interfaces';
import { PaymentSettingsService } from 'modules/sales/settings/payment-settings/services';
import { PAYMENT_SETTINGS_LIST_KEY } from 'modules/sales/settings/payment-settings/constants';
import { useEffect, useCallback } from 'react';

const initValues: IPaymentSettings = {
  name: '',
  description: '',
};

const usePaymentSettingsCreateForm = (onClose: () => void, defaultValues: IPaymentSettings = initValues) => {
  const { t } = useTranslation('paymentSettings');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm } = useForm({
    resolver: yupResolver(paymentSettingsSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, reset: resetMutation, error, isLoading, isSuccess, data } = useMutation(
    (paymentSettings: IPaymentSettings) => PaymentSettingsService.saveOrUpdate(paymentSettings),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([PAYMENT_SETTINGS_LIST_KEY]);
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
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default usePaymentSettingsCreateForm;
