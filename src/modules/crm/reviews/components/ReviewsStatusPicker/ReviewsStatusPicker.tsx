import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import useUpdateReviewsStatus from '../../hooks/useUpdateReviewsStatus';
import { ADMIN_REVIEW_STATUS } from '../../constants/reviews_status';

type ReviewsStatusPickerProps = {
  value: IStatus;
  reviewId: string;
  statusColor?: string;
  isLoading?: boolean;
  isError?: boolean;
};

const ReviewsStatusPicker = ({ value, reviewId }: ReviewsStatusPickerProps) => {
  const { t } = useTranslation('product');
  const { mutateAsync, isLoading: loadingChange } = useUpdateReviewsStatus(reviewId);

  return (
    <StatusPicker
      readOnly
      options={ADMIN_REVIEW_STATUS.map((option) => ({ ...option, title: t(option.title) }))}
      name='active'
      size={'small'}
      value={{ ...value, title: t(value?.title) }}
      isLoading={loadingChange}
      onChange={(status: IStatus) => mutateAsync(status?._id)}
    />
  );
};

export default memo(ReviewsStatusPicker);
