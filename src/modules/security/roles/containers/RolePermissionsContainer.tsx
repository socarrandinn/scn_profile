import { memo } from 'react';
import { useRoleDetail } from '../contexts';
import RolePermissions from './RolePermissions';

const RolePermissionsContainer = () => {
  const { data: role, type } = useRoleDetail();

  return <RolePermissions role={role} type={type} />;
};

export default memo(RolePermissionsContainer);
