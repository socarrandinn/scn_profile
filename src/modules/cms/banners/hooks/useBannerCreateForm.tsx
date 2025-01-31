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
import { COLLECTION_ELEMENTS_LIST_KEY } from 'modules/cms/collections/constants';

const initValues: IBanner = {
  title: '',
  description: '',
  withText: false,
  startDate: '',
  endDate: '',
  active: false,
  position: 'LEFT',
  linkUrl: '',
  desktopImage: null,
  mobileImage: null,
};

type Props = {
  defaultValues?: IBanner;
  collectionId?: string;
  onClose?: () => void;
};
const useBannerCreateForm = ({ defaultValues = initValues, onClose, collectionId }: Props) => {
  const { t } = useTranslation('banner');
  const { media, reset: resetMedia } = useBannerContext();
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    setValue,
    // formState: { errors },
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
  } = useMutation(
    (banner: IBanner) => {
      if (collectionId) {
        // add element banner to collection whit details
        return BannerService.addElementBanner({ banner, collectionId });
      }
      return BannerService.saveOrUpdate(banner);
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([BANNERS_LIST_KEY]);
        queryClient.invalidateQueries([COLLECTION_ELEMENTS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
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
