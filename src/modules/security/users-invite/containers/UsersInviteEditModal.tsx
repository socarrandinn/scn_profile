import { memo, useCallback } from 'react';
import UsersInviteCreateModal from 'modules/security/users-invite/containers/UsersInviteCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneUsersInvite } from 'modules/security/users-invite/hooks/useFindOneUsersInvite';

const UsersInviteEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const entityId = searchParams.get('edit');
  
  const { isLoading, data, error } = useFindOneUsersInvite(entityId);
  
  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit')
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <UsersInviteCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(UsersInviteEditModal);
