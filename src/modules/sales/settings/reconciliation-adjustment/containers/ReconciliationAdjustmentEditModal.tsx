import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReconciliationAdjustmentCreateModal from './ReconciliationAdjustmentCreateModal';
import { useFindOneReconciliationAdjustment } from '../hooks/useFindOneReconciliationAdjustment';

const ReconciliationAdjustmentEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const detailId = searchParams.get('details');
  const { isLoading, data, error } = useFindOneReconciliationAdjustment(entityId ?? detailId);

  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    delete params.details;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <ReconciliationAdjustmentCreateModal
      title={detailId ? 'details' : 'edit'}
      open={!!entityId || !!detailId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ReconciliationAdjustmentEditModal);
