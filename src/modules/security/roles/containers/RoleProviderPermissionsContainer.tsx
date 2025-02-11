import { memo } from 'react';
import { useRoleDetail } from '../contexts/RoleDetailContext';
import RolePermissions from './RolePermissions';

const RolePermissionsContainer = () => {
  const { data: role } = useRoleDetail();
  return <RolePermissions role={role} isProvider />;
};

export default memo(RolePermissionsContainer);
