import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import { useRoleDetail } from '../../contexts/RoleDetailContext';
import roleProvidersDetailsRoutes from '../../routes/role-providers-details';

const RoleProviderDetailsContent = () => {
  const { roleId } = useRoleDetail();

  return (
    <Box>
      <RouteLoader routes={roleProvidersDetailsRoutes} notfoundRedirect={`/security/roles/providers/${roleId}/permissions`} />
    </Box>
  );
};

export default memo(RoleProviderDetailsContent);
