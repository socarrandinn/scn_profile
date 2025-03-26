import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { SUB_ORDERS_LIST_KEY } from 'modules/sales/sub-orders/constants/sub-order.queries';
import { updatePaymentAgreementSchema } from '../schemas/payment-agreement.schema';
import { PaymentAgreementService } from '../services';
import { PAYMENT_AGREEMENTS_LIST_KEY } from '../constants';
import { PAYMENT_AGREEMENT_ROUTE } from '../constants/payment-agreement-route';

type IUpdatePaymentAgreement = {
  paymentAgreementId: string | null;
  filters: any;
};
const initValues: IUpdatePaymentAgreement = {
  paymentAgreementId: null,
  filters: {},
};

const usePaymentAgreementUpdateForm = (onClose: () => void, defaultValues: IUpdatePaymentAgreement = initValues) => {
  const { t } = useTranslation('paymentAgreement');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { control, handleSubmit, reset, setValue } = useForm({
    resolver: yupResolver(updatePaymentAgreementSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation(
    (values: IUpdatePaymentAgreement) =>
      PaymentAgreementService.add(values?.paymentAgreementId, {
        filters: values?.filters,
      }),
    {
      onSuccess: (data, values) => {
        const paymentAgreementId = values?.paymentAgreementId;
        queryClient.invalidateQueries([PAYMENT_AGREEMENTS_LIST_KEY]);
        queryClient.invalidateQueries([SUB_ORDERS_LIST_KEY]);
        paymentAgreementId && queryClient.invalidateQueries([paymentAgreementId]);
        toast.success(t(paymentAgreementId ? 'successUpdate' : 'successCreated'));
        onClose?.();
        reset();
        navigate(PAYMENT_AGREEMENT_ROUTE.DETAIL(paymentAgreementId as string));
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    resetMutation,
    setValue,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default usePaymentAgreementUpdateForm;
