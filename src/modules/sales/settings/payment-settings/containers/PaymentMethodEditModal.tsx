import { memo, useCallback } from 'react';
import PaymentMethodCreateModal from 'modules/sales/settings/payment-settings/containers/PaymentMethodCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOnePaymentMethod } from '../hooks/useFindOnePaymentMethod';

const PaymentMethodEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const entityId = searchParams.get('edit');

  const { isLoading, data, error } = useFindOnePaymentMethod(entityId);

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <PaymentMethodCreateModal
      title={`order:payment.method.${data?.methodType}`}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(PaymentMethodEditModal);
