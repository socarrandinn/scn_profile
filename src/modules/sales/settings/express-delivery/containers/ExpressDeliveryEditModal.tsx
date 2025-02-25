import { memo, useCallback } from 'react';
import ExpressDeliveryCreateModal from 'modules/sales/settings/express-delivery/containers/ExpressDeliveryCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneExpressDelivery } from 'modules/sales/settings/express-delivery/hooks/useFindOneExpressDelivery';

const ExpressDeliveryEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneExpressDelivery();
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <ExpressDeliveryCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ExpressDeliveryEditModal);
