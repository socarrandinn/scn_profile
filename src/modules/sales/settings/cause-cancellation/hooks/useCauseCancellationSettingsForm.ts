import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { causeCancellationSettingsSchema } from 'modules/sales/settings/cause-cancellation/schemas/cause-cancellation.schema';
import { ICauseCancellationSettings } from 'modules/sales/settings/cause-cancellation/interfaces';
import { CauseCancellationService } from 'modules/sales/settings/cause-cancellation/services';
import { useEffect } from 'react';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';

const initValues: ICauseCancellationSettings = {
  maxElapsingTime: 24,
  reimbursementCharge: { type: PriceType.FIXED, value: 6 },
};

const useCauseCancellationSettingsForm = (defaultValues: ICauseCancellationSettings = initValues) => {
  const { t } = useTranslation('causeCancellation');
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(causeCancellationSettingsSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (causeCancellationSettings: ICauseCancellationSettings) =>
      CauseCancellationService.saveOrUpdate(causeCancellationSettings),
    {
      onSuccess: (data, values) => {
        toast.success(t('successUpdate'));
        reset();
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
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useCauseCancellationSettingsForm;
