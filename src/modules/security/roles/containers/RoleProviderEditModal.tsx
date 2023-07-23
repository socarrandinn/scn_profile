import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import RoleProviderCreateModal from './RoleProviderCreateModal';
import { useFindOneRoleProvider } from '../hooks/useFindOneRoleProvider';

const RoleProviderEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneRoleProvider(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <RoleProviderCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(RoleProviderEditModal);
