import { memo, useCallback } from 'react';
import ReasonForJobChangeCreateModal from 'modules/inventory/product/settings/reason-for-job-change/containers/ReasonForJobChangeCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneReasonForJobChanges } from 'modules/inventory/product/settings/reason-for-job-change/hooks/useFindOneJobPositions';

const ReasonForJobChangeEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneReasonForJobChanges(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <ReasonForJobChangeCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ReasonForJobChangeEditModal);
