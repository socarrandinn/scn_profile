import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IPage } from '../interfaces';
import { PAGES_ONE_KEY } from '../constants';
import { PageService } from '../services';
import { useParams } from 'react-router';

const usePageUpdate = (defaultValues: Partial<IPage>, schema: any, onClose?: () => void) => {
  const { t } = useTranslation('provider');
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    values: defaultValues,
  });

  const seoTitle = watch?.('seo.name');
  const seoDescription = watch?.('seo.description');
  const slug = watch?.('slug');

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (data: Partial<IPage>) => PageService.update(id, data),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([data?._id, PAGES_ONE_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successBasicUpdate'));
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
    seoTitle,
    formState,
    seoDescription,
    slug,
    values: formState.errors,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default usePageUpdate;
