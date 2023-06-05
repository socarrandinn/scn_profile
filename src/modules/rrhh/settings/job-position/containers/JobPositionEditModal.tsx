import { memo, useCallback } from 'react';
import JobPositionCreateModal from 'modules/rrhh/settings/job-position/containers/JobPositionCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneJobPositions } from 'modules/rrhh/settings/job-position/hooks/useFindOneJobPositions';

const JobPositionEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneJobPositions(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <JobPositionCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(JobPositionEditModal);
