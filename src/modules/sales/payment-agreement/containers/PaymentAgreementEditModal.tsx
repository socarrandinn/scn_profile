import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFindOnePaymentAgreement } from '../hooks/useFindOnePaymentAgreement';
import PaymentAgreementCreateModal from './PaymentAgreementCreateModal';

const PaymentAgreementEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const entityId = searchParams.get('edit');

  const { isLoading, data, error } = useFindOnePaymentAgreement(entityId);

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit');
    setSearchParams(searchParams);
  }, [entityId, searchParams, setSearchParams]);

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
