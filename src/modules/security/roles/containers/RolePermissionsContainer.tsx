import { memo } from 'react';
import { useRoleDetail } from '../contexts';
import RolePermissions from './RolePermissions';

const RolePermissionsContainer = () => {
  const { data: role } = useRoleDetail();

  return <RolePermissions role={role} />;
};

export default memo(RolePermissionsContainer);
