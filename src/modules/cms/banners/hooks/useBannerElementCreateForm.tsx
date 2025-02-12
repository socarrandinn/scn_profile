import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect, useCallback } from 'react';
import { createBannerSchema } from '../schemas/banner.schema';
import { BANNER_ELEMENT_OPERATION, IBannerCreateElementRequest } from '../interfaces/IBanner';
import { useCollectionBannerContext } from '../context/useCollectionBannerContext';
import { IMedia } from 'modules/cms/medias/interfaces/IMedia';
import { BANNERS_LIST_KEY } from '../constants';
import { COLLECTION_ELEMENTS_LIST_KEY } from 'modules/cms/collections/constants';
import { CollectionBannerElementsService } from 'modules/cms/collections/services';
import { bannerInitValue } from '../constants/banner.initValue';

const initValues: IBannerCreateElementRequest = {
  banner: bannerInitValue,
  collection: '',
  operation: BANNER_ELEMENT_OPERATION.NEW_ELEMENT,
};

type Props = {
  defaultValues?: IBannerCreateElementRequest;
  onClose?: () => void;
};
const useBannerElementCreateForm = ({ defaultValues = initValues, onClose }: Props) => {
  const { t } = useTranslation('banner');
  const { media, reset: resetMedia } = useCollectionBannerContext();
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    setValue,
  } = useForm({
    resolver: yupResolver(createBannerSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  useEffect(() => {
    if (media) {
      setValue('banner.desktopImage', imageMapper(media?.desktop));
      setValue('banner.mobileImage', imageMapper(media?.mobile));
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
    (payload: IBannerCreateElementRequest) => {
      return CollectionBannerElementsService.addElementBanner(payload);
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([BANNERS_LIST_KEY]);
        queryClient.invalidateQueries([COLLECTION_ELEMENTS_LIST_KEY]);
        values?.collection && queryClient.invalidateQueries([values.collection]);
        toast.success(t('successUpdate'));
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
export default useBannerElementCreateForm;

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
