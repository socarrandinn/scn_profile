import { memo, useCallback } from 'react';
import StockReductionCauseCreateModal from 'modules/inventory/settings/stock-reduction-cause/containers/StockReductionCauseCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/hooks/useFindOneStockReductionCause';

const StockReductionCauseEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const entityId = searchParams.get('edit');

  const { isLoading, data, error } = useFindOneStockReductionCause(entityId);

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit');
    setSearchParams(searchParams);
  }, [entityId, searchParams, setSearchParams]);

  return (
    <StockReductionCauseCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(StockReductionCauseEditModal);
