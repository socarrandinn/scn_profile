import { memo, useCallback } from 'react';
import IncidenceCreateModal from 'modules/sales/incidence/containers/IncidenceCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneIncidence } from 'modules/sales/incidence/hooks/useFindOneIncidence';

const IncidenceEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const entityId = searchParams.get('edit');

  const { isLoading, data, error } = useFindOneIncidence(entityId as string);

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit');
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, entityId]);

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
