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
import { PAYMENT_AGREEMENT_ROUTE } from '../constants/payment-agreement-route';
import { useNavigate } from 'react-router';

export const initPaymentAgreementValues: Partial<IPaymentAgreement> = {
  name: '',
  driver: 'chofer todo',
  shippingCost: 0,
  sendDate: new Date(),
  estimatedShippingCost: 0.0,
  maxShippingCost: 0.0,
};

const usePaymentAgreementCreateForm = (
  onClose: () => void,
  defaultValues: Partial<IPaymentAgreement> = initPaymentAgreementValues,
) => {
  const { t } = useTranslation('paymentAgreement');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    formState,
  } = useForm({
    resolver: yupResolver(paymentAgreementSchema),
    defaultValues,
  });

  console.log(formState.errors, 'formState');

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
  } = useMutation(
    (paymentAgreement: Partial<IPaymentAgreement>) => PaymentAgreementService.saveOrUpdate(paymentAgreement),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([PAYMENT_AGREEMENTS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
        resetForm();
        navigate(PAYMENT_AGREEMENT_ROUTE.DETAIL(data?._id as string));
      },
    },
  );

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
    formState,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default usePaymentAgreementCreateForm;
