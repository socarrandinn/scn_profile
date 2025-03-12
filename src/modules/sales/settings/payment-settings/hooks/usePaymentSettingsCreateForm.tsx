import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { paymentSettingsSchema } from 'modules/sales/settings/payment-settings/schemas/payment-settings.schema';
import { ICurrencySettings } from 'modules/sales/settings/payment-settings/interfaces';
import { CurrencySettingsService } from 'modules/sales/settings/payment-settings/services';
import { CURRENCY_SYMBOL_ENUM, CURRENCY_TYPE_ENUM, PAYMENT_SETTINGS_LIST_KEY } from 'modules/sales/settings/payment-settings/constants';
import { useEffect, useCallback } from 'react';

const initValues: ICurrencySettings = {
  activeCurrencies: [CURRENCY_TYPE_ENUM.USD, CURRENCY_TYPE_ENUM.MXN, CURRENCY_TYPE_ENUM.EUR],
  exchangeRate: {
    manualMode: false,
    rates: []
  },
  primaryCurrency: CURRENCY_TYPE_ENUM.USD
};

const usePaymentSettingsCreateForm = (defaultValues: ICurrencySettings = initValues, onClose?: () => void) => {
  const { t } = useTranslation('paymentSettings');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm, watch, formState } = useForm({
    // resolver: yupResolver(paymentSettingsSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, reset: resetMutation, error, isLoading, isSuccess, data } = useMutation(
    (paymentSettings: ICurrencySettings) => CurrencySettingsService.saveOrUpdate(paymentSettings),
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
    watch,
    formState,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default usePaymentSettingsCreateForm;
