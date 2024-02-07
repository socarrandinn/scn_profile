import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import PickupPointCreateModal from './PickupPointCreateModal';
import { useFindOnePlace } from '../hooks/useFindOnePlace';

const PickupPointEditModal = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, place, error } = useFindOnePlace(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <PickupPointCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      loadingInitData={isLoading}
      dataError={error}
      initValue={place}
    />
  );
};

export default memo(PickupPointEditModal);
