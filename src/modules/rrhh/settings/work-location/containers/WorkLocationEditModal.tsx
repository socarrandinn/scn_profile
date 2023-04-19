import { memo, useCallback } from 'react';
import WorkLocationCreateModal from 'modules/rrhh/settings/work-location/containers/WorkLocationCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneWorkLocation } from 'modules/rrhh/settings/work-location/hooks/useFindOneWorkLocation';

const WorkLocationEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneWorkLocation(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <WorkLocationCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(WorkLocationEditModal);
