import { memo, useCallback } from 'react';
import OrderStatusCreateModal from 'modules/sales/settings/order-status/containers/OrderStatusCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneOrderStatus } from 'modules/sales/settings/order-status/hooks/useFindOneOrderStatus';
import { getNotificationDefault } from '../../common/constants/common.utils';

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
      // @ts-ignore
      initValue={{ ...data, notification: getNotificationDefault(data?.notification) }}
      loadingInitData={isLoading}
      dataError={error}
      edit
    />
  );
};

export default memo(OrderStatusEditModal);
