import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { paymentAgreementSchema } from 'modules/sales/payment-agreement/schemas/payment-agreement.schema';
import { IPaymentAgreement } from 'modules/sales/payment-agreement/interfaces';
import { PaymentAgreementService } from 'modules/sales/payment-agreement/services';
import { PAYMENT_AGREEMENTS_LIST_KEY } from 'modules/sales/payment-agreement/constants';
import { useEffect, useCallback } from 'react';

const initValues: IPaymentAgreement = {
  name: '',
  driver: '',
  shippingCost: 0,
  estimatedShippingCost: 0,
  sendDate: new Date(),
};

const usePaymentAgreementCreateForm = (onClose: () => void, defaultValues: IPaymentAgreement = initValues) => {
  const { t } = useTranslation('paymentAgreement');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm({
    resolver: yupResolver(paymentAgreementSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const {
    mutate,
    reset: resetMutation,
    error,
    isLoading,
    isSuccess,
    data,
  } = useMutation((paymentAgreement: IPaymentAgreement) => PaymentAgreementService.saveOrUpdate(paymentAgreement), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([PAYMENT_AGREEMENTS_LIST_KEY]);
      values?._id && queryClient.invalidateQueries([values._id]);
      toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
      onClose?.();
      resetForm();
    },
  });

  const reset = useCallback(() => {
    resetForm();
    resetMutation();
  }, [resetForm, resetMutation]);

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
export default usePaymentAgreementCreateForm;
