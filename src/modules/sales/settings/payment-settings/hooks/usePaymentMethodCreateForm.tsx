import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IPaymentSettings } from 'modules/sales/settings/payment-settings/interfaces';
import { PaymentMethodsService } from 'modules/sales/settings/payment-settings/services';
import { PAYMENT_METHOD_LIST_KEY } from 'modules/sales/settings/payment-settings/constants';
import { useEffect, useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { paymentSettingsSchema } from '../schemas/payment-settings.schema';

const usePaymentMethodCreateForm = (id: string, defaultValues: IPaymentSettings, onClose?: () => void) => {
  const { t } = useTranslation('paymentSettings');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset: resetForm, watch, formState } = useForm({
    resolver: yupResolver(paymentSettingsSchema),
    defaultValues,
  });

  const tax = watch('tax');

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, reset: resetMutation, error, isLoading, isSuccess, data } = useMutation(
    (settings: IPaymentSettings) => PaymentMethodsService.updateSettings(id, { settings }),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([PAYMENT_METHOD_LIST_KEY]);
        toast.success(t('successUpdate'));
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
    initTaxType: tax?.type,
    formState,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default usePaymentMethodCreateForm;
