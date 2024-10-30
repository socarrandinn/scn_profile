import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useReviewsReportDetailContext } from '../../contexts/ReviewsReportDetail';
import { IReviews } from '../../interfaces';
import { Rating } from '@mui/material';
import { DateValue, IStatus } from '@dfl/mui-react-common';
import { ReviewsStatusPicker } from '../ReviewsStatusPicker';
import { ADMIN_REVIEW_STATUS_MAP } from '../../constants/reviews_status';
import { simpleColumns } from 'modules/common/constants/simple.columns';

const ReviewGeneralData = () => {
  const { t } = useTranslation('reviews');
  const { review, isLoading, error } = useReviewsReportDetailContext();

  return (
    <FormPaper title={t('fields.basicInformation')} actions={<></>}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(review as IReviews) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(ReviewGeneralData);

const getArray = (data: IReviews): any[] => {
  const array = [
    {
      label: 'rate:fields.title',
      value: data?.title,
    },
    {
      label: 'rate:fields.comment',
      value: data?.comment,
    },
    {
      label: 'rate:fields.report',
      value: data?.report?.count,
    },
    {
      label: 'common:createdAt',
      value: <DateValue value={data?.createdAt} />,
    },
    {
      label: 'rate:fields.vote',
      value: (
        <Rating
          readOnly
          value={data?.vote}
          size={'small'}
          name='star'
          sx={{ color: (theme) => theme.palette.primary.main }}
        />
      ),
    },
    {
      label: 'common:status',
      value: (
        <ReviewsStatusPicker
          value={ADMIN_REVIEW_STATUS_MAP.get(data?.status) as IStatus}
          reviewId={data?._id as string}
        />
      ),
    },
  ];
  return array;
};
