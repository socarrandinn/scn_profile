import { memo, useCallback } from 'react';
import EmployeeCreateModal from 'modules/rrhh/employee/containers/EmployeeCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneEmployee } from 'modules/rrhh/employee/hooks/useFindOneEmployee';

const EmployeeEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneEmployee(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <EmployeeCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(EmployeeEditModal);
