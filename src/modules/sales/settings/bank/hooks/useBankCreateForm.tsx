import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { bankSchema } from 'modules/sales/settings/bank/schemas/bank.schema';
import { IBank } from 'modules/sales/settings/bank/interfaces';
import { BankService } from 'modules/sales/settings/bank/services';
import { BANKS_LIST_KEY } from 'modules/sales/settings/bank/constants';
import { useEffect, useCallback } from 'react';
import { CURRENCY_TYPE_ENUM } from '../../payment-settings/constants';

const initValues: IBank = {
  name: '',
  description: '',
  alias: '',
  currency: CURRENCY_TYPE_ENUM.USD,
  enabled: false,
  ibanNumber: '',
  swiftBIC: '',
  branch: '',
  branchHolder: ''
};

const useBankCreateForm = (onClose: () => void, defaultValues: IBank = initValues) => {
  const { t } = useTranslation('bank');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm } = useForm({
    resolver: yupResolver(bankSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, reset: resetMutation, error, isLoading, isSuccess, data } = useMutation(
    (bank: IBank) => BankService.saveOrUpdate(bank),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([BANKS_LIST_KEY]);
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
export default useBankCreateForm;
