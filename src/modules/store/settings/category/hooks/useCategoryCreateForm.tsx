import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { categorySchema } from 'modules/store/settings/category/schemas/category.schema';
import { ICategory } from 'modules/store/settings/category/interfaces';
import { CategoryService } from 'modules/store/settings/category/services';
import { CATEGORIES_LIST_KEY } from 'modules/store/settings/category/constants';
import { useEffect } from 'react';

const initValues: ICategory = {
  name: '',
  description: '',
};

const useCategoryCreateForm = (onClose: () => void, defaultValues: ICategory = initValues) => {
  const { t } = useTranslation('category');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(categorySchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (category: ICategory) => CategoryService.saveOrUpdate(category),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([CATEGORIES_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
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
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useCategoryCreateForm;
