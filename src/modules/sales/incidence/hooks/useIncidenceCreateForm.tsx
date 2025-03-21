import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { incidenceSchema } from 'modules/sales/incidence/schemas/incidence.schema';
import { IIncidence } from 'modules/sales/incidence/interfaces';
import { IncidenceService } from 'modules/sales/incidence/services';
import { INCIDENCES_LIST_KEY } from 'modules/sales/incidence/constants';
import { useEffect, useCallback } from 'react';
import { INCIDENCE_STATUS_ENUM } from '../constants/incidence-status';

export const emptyIncidence: IIncidence = {
  name: 'incidence',
  description: '',
  cause: { _id: '', name: '' },
  orderReference: '',
  responsible: '',
  status: INCIDENCE_STATUS_ENUM.OPEN,
};

const useIncidenceCreateForm = (onClose: () => void, defaultValues: IIncidence = emptyIncidence) => {
  const { t } = useTranslation('incidence');
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    reset: resetForm,
    watch,
    formState,
    setValue,
  } = useForm({
    resolver: yupResolver(incidenceSchema),
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
  } = useMutation(
    (incidence: IIncidence) => {
      return IncidenceService.saveOrUpdate({ ...incidence, cause: incidence?.cause?._id, subCause: incidence?.subCause?._id });
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([INCIDENCES_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
        resetForm();
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
    formState,
    watch,
    setValue,
    data,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useIncidenceCreateForm;
