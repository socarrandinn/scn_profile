import { memo, useCallback } from 'react';
import PaymentAgreementCreateModal from 'modules/sales/payment-agreement/containers/PaymentAgreementCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOnePaymentAgreement } from 'modules/sales/payment-agreement/hooks/useFindOnePaymentAgreement';

const PaymentAgreementEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOnePaymentAgreement(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <PaymentAgreementCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(PaymentAgreementEditModal);
