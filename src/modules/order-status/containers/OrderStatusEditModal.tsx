import { memo, useCallback } from 'react';
import OrderStatusCreateModal from 'modules/order-status/containers/OrderStatusCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneOrderStatus } from 'modules/order-status/hooks/useFindOneOrderStatus';

const OrderStatusEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneOrderStatus(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <OrderStatusCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(OrderStatusEditModal);
