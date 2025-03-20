import { memo, useCallback } from 'react';
import ConciliationAdjustmentCausesCreateModal from 'modules/sales/settings/conciliation-adjustment-causes/containers/ConciliationAdjustmentCausesCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneConciliationAdjustmentCauses } from 'modules/sales/settings/conciliation-adjustment-causes/hooks/useFindOneConciliationAdjustmentCauses';

const ConciliationAdjustmentCausesEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const entityId = searchParams.get('edit');

  const { isLoading, data, error } = useFindOneConciliationAdjustmentCauses(entityId);

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit');
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, entityId]);

  return (
    <ConciliationAdjustmentCausesCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ConciliationAdjustmentCausesEditModal);
