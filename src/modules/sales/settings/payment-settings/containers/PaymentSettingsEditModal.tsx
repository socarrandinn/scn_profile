import { memo, useCallback } from 'react';
import PaymentSettingsCreateModal from 'modules/sales/settings/payment-settings/containers/PaymentSettingsCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOnePaymentSettings } from 'modules/sales/settings/payment-settings/hooks/useFindOnePaymentSettings';

const PaymentSettingsEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOnePaymentSettings(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <PaymentSettingsCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(PaymentSettingsEditModal);
