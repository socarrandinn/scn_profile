import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IPage } from '../interfaces';
import { PAGES_ONE_KEY } from '../constants';
import { PageService } from '../services';
import { Schema } from 'yup';

const usePageUpdate = (defaultValues: Partial<IPage>, schema: Schema, onClose?: () => void) => {
  const { t } = useTranslation('page');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState, watch, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    values: defaultValues,
  });

  const seoTitle = watch?.('seo.name');
  const seoDescription = watch?.('seo.description');
  const slug = watch?.('slug');

  console.log('defaultValues', watch());

  const { mutate, error, isLoading, data } = useMutation(
    (seo: Partial<IPage>) => PageService.update(seo),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([data?._id, PAGES_ONE_KEY]);
        toast.success(t('successUpdate'));
        onClose?.();
        reset();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    setValue,
    data,
    reset,
    seoTitle,
    formState,
    seoDescription,
    slug,
    values: formState.errors,
    watch,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default usePageUpdate;
