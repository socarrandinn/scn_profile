import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { reviewsSchema } from 'modules/crm/reviews/schemas/reviews.schema';
import { IReviews } from 'modules/crm/reviews/interfaces';
import { ReviewsService } from 'modules/crm/reviews/services';
import { REVIEWS_LIST_KEY } from 'modules/crm/reviews/constants';
import { useEffect } from 'react';

const initValues: Partial<IReviews> = {
  title: '',
  comment: '',
};

const useReviewsCreateForm = (onClose: () => void, defaultValues: Partial<IReviews> = initValues) => {
  const { t } = useTranslation('reviews');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(reviewsSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (reviews: Partial<IReviews>) => ReviewsService.saveOrUpdate(reviews),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([REVIEWS_LIST_KEY]);
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
export default useReviewsCreateForm;
