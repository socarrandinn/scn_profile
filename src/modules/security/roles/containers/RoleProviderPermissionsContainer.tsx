import { memo } from 'react';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';
import RolePermissions from './RolePermissions';

const RolePermissionsContainer = () => {
  const { data: role } = useRoleProviderDetail();
  return <RolePermissions role={role} />;
};

export default memo(RolePermissionsContainer);
