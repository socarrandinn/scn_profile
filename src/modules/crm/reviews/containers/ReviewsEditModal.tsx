import { memo, useCallback } from 'react';
import ReviewsCreateModal from 'modules/crm/reviews/containers/ReviewsCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneReviews } from 'modules/crm/reviews/hooks/useFindOneReviews';

const ReviewsEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneReviews(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <ReviewsCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ReviewsEditModal);
