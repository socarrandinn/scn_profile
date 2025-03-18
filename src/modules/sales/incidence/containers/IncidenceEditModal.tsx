import { memo, useCallback } from 'react';
import IncidenceCreateModal from 'modules/sales/incidence/containers/IncidenceCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneIncidence } from 'modules/sales/incidence/hooks/useFindOneIncidence';

const IncidenceEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOneIncidence(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <IncidenceCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(IncidenceEditModal);
