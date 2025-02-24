import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReconciliationAdjustmentCreateModal from './ReconciliationAdjustmentCreateModal';
import { useFindOneReconciliationAdjustment } from '../hooks/useFindOneReconciliationAdjustment';
import { useReconciliationAdjustmentParamsSearch } from '../hooks/useReconciliationAdjustmentParamsSearch';

const ReconciliationAdjustmentEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { isDetail, isEdit, detailId, editId } = useReconciliationAdjustmentParamsSearch();

  const { isLoading, data, error } = useFindOneReconciliationAdjustment(editId ?? detailId);

  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    delete params.details;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <ReconciliationAdjustmentCreateModal
      title={isDetail ? 'details' : 'edit'}
      open={isEdit || isDetail}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ReconciliationAdjustmentEditModal);
