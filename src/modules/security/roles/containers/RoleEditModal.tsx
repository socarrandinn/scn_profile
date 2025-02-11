import { memo, useCallback } from 'react';
import RoleCreateModal from 'modules/security/roles/containers/RoleCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneRoles } from 'modules/security/roles/hooks/useFindOneRoles';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const RoleEditModal = ({ type }: { type: SPACE_TYPE }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneRoles(type, entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <RoleCreateModal
      type={type}
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(RoleEditModal);
