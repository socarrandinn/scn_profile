import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useEffect, useCallback } from 'react';

import { bannerPositionSchema } from '../../schemas/banner.schema';

const initValues = {
  elements: [],
  position: '',
};

type IBannerPosition = {
  position: string;
  elements: string[];
};

const usePositionBannerForm = (defaultValues: IBannerPosition = initValues) => {
  const {
    control,
    reset: resetForm,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(bannerPositionSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const reset = useCallback(() => {
    resetForm();
  }, [resetForm]);

  return {
    control,
    reset,
    onSubmit: handleSubmit(() => {}),
  };
};
export default usePositionBannerForm;
