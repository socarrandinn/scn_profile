import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { assign } from 'lodash';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IncidenceService } from '../services';
import { INCIDENCE_COMMENTS_LIST } from '../constants';
import { IIncidenceComment } from '../interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { incidenceCommentSchema } from '../schemas/incidence.schema';

const initValues: IIncidenceComment = {
  incidence: '',
  comment: '',
  attachments: [],
};

const useIncidenceCommentCreateForm = (incidenceId: string, defaultValues = initValues) => {
  const { t } = useTranslation('incidence');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset, setValue, watch } = useForm({
    resolver: yupResolver(incidenceCommentSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset({ comment: '', attachments: [] });
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (value: IIncidenceComment) => IncidenceService.addComments(incidenceId, value),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([INCIDENCE_COMMENTS_LIST]);
        toast.success(t('addCommentSuccess'));
        reset({ incidence: values?.incidence || incidenceId, comment: '', attachments: [] });
      },
      onError: () => {
        toast.error(t('addCommentError'));
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    watch,
    setValue,
    reset,
    onSubmit: handleSubmit((values) => {
      const finalValue = assign(values, { image: values?.attachments?.map((a: any) => a.image) || [] });
      // @ts-ignore
      mutate(finalValue);
    }),
  };
};

export default useIncidenceCommentCreateForm;
