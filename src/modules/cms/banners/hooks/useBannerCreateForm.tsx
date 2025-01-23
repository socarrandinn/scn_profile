import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect, useCallback } from 'react';
import { BannerService } from '../services';
import { bannerSchema } from '../schemas/banner.schema';
import { IBanner } from '../interfaces/IBanner';
import { useBannerContext } from '../context/useBannerContext';
import { IMedia } from 'modules/cms/medias/interfaces/IMedia';
import { BANNERS_LIST_KEY } from '../constants';

const initValues: IBanner = {
  title: '',
  description: '',
  withText: false,
  startDate: '',
  endDate: '',
  active: false,
  position: '',
  linkUrl: '',
  desktopImage: null,
  mobileImage: null,
};

const useBannerCreateForm = (defaultValues: IBanner = initValues, onClose?: () => void) => {
  const { t } = useTranslation('banner');
  const { media, reset: resetMedia } = useBannerContext();
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    setValue,
  } = useForm({
    resolver: yupResolver(bannerSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  useEffect(() => {
    if (media) {
      setValue('desktopImage', imageMapper(media?.desktop));
      setValue('mobileImage', imageMapper(media?.mobile));
    }
  }, [defaultValues, media, resetForm, setValue]);

  const {
    mutate,
    reset: resetMutation,
    error,
    isLoading,
    isSuccess,
    data,
  } = useMutation((collections: IBanner) => BannerService.saveOrUpdate(collections), {
    onSuccess: (data, values) => {
      queryClient.invalidateQueries([BANNERS_LIST_KEY]);
      values?._id && queryClient.invalidateQueries([values._id]);
      toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
      onClose?.();
      resetForm();
      setTimeout(() => {
        resetMedia();
      }, 800);
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

const imageMapper = (media: IMedia | null) => {
  if (!media) return null;
  return {
    _id: media?._id,
    thumb: media?.thumb,
    url: media?.url,
    width: media?.width,
    height: media?.height,
    sizes: media?.sizes,
  };
};
