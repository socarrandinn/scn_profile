import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { COLLECTIONS_LIST_KEY } from 'modules/cms/collections/constants';
import { useEffect, useCallback } from 'react';
import { BannerService } from '../services';
import { bannerSchema } from '../schemas/banner.schema';
import { IBanner } from '../interfaces/IBanner';

const initValues: IBanner = {
  title: '',
  description: '',
  withText: false,
  startDate: '',
  endDate: '',
  active: false,
  position: '',
  linkUrl: '',
  desktopImage: '',
  mobileImage: '',
};

const useBannerCreateForm = (defaultValues: IBanner = initValues, onClose?: () => void) => {
  const { t } = useTranslation('collection');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm({
    resolver: yupResolver(bannerSchema),
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
  } = useMutation((collections: IBanner) => BannerService.saveOrUpdate(collections), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([COLLECTIONS_LIST_KEY]);
      values?._id && queryClient.invalidateQueries([values._id]);
      toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));

      resetForm();
    },
  });

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
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useBannerCreateForm;
