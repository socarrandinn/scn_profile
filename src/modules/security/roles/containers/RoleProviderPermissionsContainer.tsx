import { memo } from 'react';
import { useRoleDetail } from '../contexts/RoleDetailContext';
import RolePermissions from './RolePermissions';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const RolePermissionsContainer = () => {
  const { data: role } = useRoleDetail();
  return <RolePermissions role={role} type={SPACE_TYPE.PROVIDER} />;
};

export default memo(RolePermissionsContainer);
