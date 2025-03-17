import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ICurrencySettings } from 'modules/sales/settings/payment-settings/interfaces';
import { CurrencySettingsService } from 'modules/sales/settings/payment-settings/services';
import { CURRENCY_SETTINGS_KEY, CURRENCY_RATE_MODE } from 'modules/sales/settings/payment-settings/constants';
import { useEffect, useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { currencySettingsSchema } from '../schemas/payment-settings.schema';

const useCurrencySettingsCreateForm = (defaultValues: ICurrencySettings, onClose?: () => void) => {
  const { t } = useTranslation('paymentSettings');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm, watch, formState, setValue } = useForm({
    resolver: yupResolver(currencySettingsSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, reset: resetMutation, error, isLoading, isSuccess, data } = useMutation(
    (paymentSettings: ICurrencySettings) => {
      const transformedCurrencies = paymentSettings?.currencies?.map((item) => ({
        ...item,
        isCustomRate: item?.isCustomRate === CURRENCY_RATE_MODE.MANUAL,
      }));

      const data = {
        ...paymentSettings,
        currencies: transformedCurrencies,
      }
      return CurrencySettingsService.save(data)
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([CURRENCY_SETTINGS_KEY]);
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
    formState,
    reset,
    setValue,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useCurrencySettingsCreateForm;
