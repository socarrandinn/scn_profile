import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { offerSchema } from 'modules/sales-offer/offer/schemas/offer.schema';
import { IOffer } from 'modules/sales-offer/offer/interfaces';
import { OfferService } from 'modules/sales-offer/offer/services';
import { OFFERS_LIST_KEY } from 'modules/sales-offer/offer/constants';
import { useEffect, useCallback } from 'react';

const initValues: IOffer = {
  name: '',
  description: '',
};

const useOfferCreateForm = (onClose: () => void, defaultValues: IOffer = initValues) => {
  const { t } = useTranslation('offer');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm } = useForm({
    resolver: yupResolver(offerSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, reset: resetMutation, error, isLoading, isSuccess, data } = useMutation(
    (offer: IOffer) => OfferService.saveOrUpdate(offer),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([OFFERS_LIST_KEY]);
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
export default useOfferCreateForm;
