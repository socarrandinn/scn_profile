import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { assign } from 'lodash';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IncidenceCommentsService } from '../services';
import { INCIDENCE_COMMENTS_LIST } from '../constants';
import { IIncidenceComment } from '../interfaces';

const initValues: IIncidenceComment = {
  incidence: '',
  message: '',
  file: [],
};

const useIncidenceCommentCreateForm = (defaultValues = initValues, incidenceId: string) => {
  const { t } = useTranslation('incidence');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset, setValue, watch } = useForm({
    // resolver: yupResolver(incidenceCommentSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset({ message: '', file: [] });
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (value: IIncidenceComment) => IncidenceCommentsService.save(value),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([INCIDENCE_COMMENTS_LIST]);
        toast.success(t('addCommentSuccess'));
        reset({ incidence: values?.incidence || incidenceId, message: '', file: [] });
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
    reset,
    onSubmit: handleSubmit((values) => {
      const finalValue = assign(values, { image: values?.file?.map((a: any) => a.image) || [] });
      //@ts-ignore
      mutate(finalValue);
    }),
  };
};

export default useIncidenceCommentCreateForm;
