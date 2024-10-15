import { memo, useCallback } from 'react';
import PaidOrderCreateModal from 'modules/sales/paid-order/containers/PaidOrderCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOnePaidOrder } from 'modules/sales/paid-order/hooks/useFindOnePaidOrder';

const PaidOrderEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOnePaidOrder(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <PaidOrderCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(PaidOrderEditModal);
