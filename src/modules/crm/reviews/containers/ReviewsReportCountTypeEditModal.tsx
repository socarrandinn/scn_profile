import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReviewsReportCountTypeModal from './ReviewsReportCountTypeModal';
import { useFindReportReviewsById } from '../hooks/useFindReportReviewsById';

const ReviewsReportCountTypeEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('rview');

  const { isLoading, data, error } = useFindReportReviewsById(entityId as string);

  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.rview;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <ReviewsReportCountTypeModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data?.data || []}
      loadingInitData={isLoading}
      dataError={error}
      reviewId={entityId as string}
    />
  );
};

export default memo(ReviewsReportCountTypeEditModal);
