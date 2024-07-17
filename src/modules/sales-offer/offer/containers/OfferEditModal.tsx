import { memo, useCallback } from 'react';
import OfferCreateModal from 'modules/sales-offer/offer/containers/OfferCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneOffer } from 'modules/sales-offer/offer/hooks/useFindOneOffer';

const OfferEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOneOffer(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <OfferCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(OfferEditModal);
