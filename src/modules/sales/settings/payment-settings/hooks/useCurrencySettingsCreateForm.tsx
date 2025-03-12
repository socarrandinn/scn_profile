import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ICurrencySettings } from 'modules/sales/settings/payment-settings/interfaces';
import { CurrencySettingsService } from 'modules/sales/settings/payment-settings/services';
import { CURRENCY_RATE_MODE, CURRENCY_TYPE_ENUM, PAYMENT_SETTINGS_LIST_KEY } from 'modules/sales/settings/payment-settings/constants';
import { useEffect, useCallback } from 'react';

const initValues: ICurrencySettings = {
  primaryCurrency: CURRENCY_TYPE_ENUM.USD,
  activeCurrencies: [CURRENCY_TYPE_ENUM.USD, CURRENCY_TYPE_ENUM.MXN, CURRENCY_TYPE_ENUM.EUR],
  exchangeRate: [{
    currency: CURRENCY_TYPE_ENUM.USD,
    value: 0,
    mode: CURRENCY_RATE_MODE.MANUAL,
  },
  {
    currency: CURRENCY_TYPE_ENUM.EUR,
    value: 0,
    mode: CURRENCY_RATE_MODE.MANUAL,
  },
  {
    currency: CURRENCY_TYPE_ENUM.MXN,
    value: 0,
    mode: CURRENCY_RATE_MODE.MANUAL,
  },
  {
    currency: CURRENCY_TYPE_ENUM.CAD,
    value: 0,
    mode: CURRENCY_RATE_MODE.MANUAL,
  }],
};

const useCurrencySettingsCreateForm = (defaultValues: ICurrencySettings = initValues, onClose?: () => void) => {
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
    (paymentSettings: ICurrencySettings) => CurrencySettingsService.updateSettings(paymentSettings),
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
export default useCurrencySettingsCreateForm;
