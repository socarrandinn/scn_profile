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
  const { t } = useTranslation('reviews');
  const { mutateAsync, isLoading: loadingChange } = useUpdateReviewsStatus(reviewId);

  if (!value) return <></>;

  return (
    <StatusPicker
      readOnly
      options={ADMIN_REVIEW_STATUS.map((option) => ({ ...option, title: t(`status.${option.title}`) }))}
      name='status'
      size={'small'}
      value={{ ...value, title: t(`status.${value.title}`) }}
      isLoading={loadingChange}
      onChange={(status: IStatus) => mutateAsync({ status: status?._id, cause: undefined })}
    />
  );
};

export default memo(ReviewsStatusPicker);
