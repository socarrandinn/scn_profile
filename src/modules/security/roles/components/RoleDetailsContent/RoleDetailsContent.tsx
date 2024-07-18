import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import roleDetailsRoutes from '../../routes/role-details';
import { useRoleDetail } from '../../contexts';

const RoleDetailsContent = () => {
  const { roleId } = useRoleDetail();

  return (
    <Box>
      <RouteLoader routes={roleDetailsRoutes} notfoundRedirect={`/security/roles/system/${roleId}/users`} />
    </Box>
  );
};

export default memo(RoleDetailsContent);
