import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { causesIncidenceSchema } from 'modules/sales/settings/causes-incidence/schemas/causes-incidence.schema';
import { ICausesIncidence } from 'modules/sales/settings/causes-incidence/interfaces';
import { CausesIncidenceService } from 'modules/sales/settings/causes-incidence/services';
import { CAUSES_INCIDENCES_LIST_KEY } from 'modules/sales/settings/causes-incidence/constants';
import { useEffect } from 'react';

const initValues: ICausesIncidence = {
  type: '',
  description: '',
};

const useCausesIncidenceCreateForm = (onClose: () => void, defaultValues: ICausesIncidence = initValues) => {
  const { t } = useTranslation('causesIncidence');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(causesIncidenceSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (causesIncidence: ICausesIncidence) => CausesIncidenceService.saveOrUpdate(causesIncidence),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([CAUSES_INCIDENCES_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
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
export default useCausesIncidenceCreateForm;
