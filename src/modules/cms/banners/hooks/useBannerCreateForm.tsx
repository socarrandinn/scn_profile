import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect, useCallback } from 'react';
import { bannerSchema } from '../schemas/banner.schema';
import { IBanner } from '../interfaces/IBanner';
import { useCollectionBannerContext } from '../context/useCollectionBannerContext';
import { IMedia } from 'modules/cms/medias/interfaces/IMedia';
import { BANNERS_LIST_KEY } from '../constants';
import { COLLECTION_ELEMENTS_LIST_KEY } from 'modules/cms/collections/constants';
import { bannerInitValue } from '../constants/banner.initValue';
import { BannerService } from '../services';

type Props = {
  defaultValues?: IBanner;
  onClose?: () => void;
};

const useBannerCreateForm = ({ defaultValues = bannerInitValue, onClose }: Props) => {
  const { t } = useTranslation('banner');
  const { media, reset: resetMedia } = useCollectionBannerContext();
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bannerSchema),
    defaultValues,
  });

  console.log(errors);

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
  } = useMutation(
    (payload: IBanner) => {
      return BannerService.saveOrUpdate(payload);
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([BANNERS_LIST_KEY]);
        queryClient.invalidateQueries([COLLECTION_ELEMENTS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreate'));
        onClose?.();
        resetForm();
        setTimeout(() => {
          resetMedia();
        }, 800);
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
