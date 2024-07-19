import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import { useRoleProviderDetail } from '../../contexts/RoleProviderDetailContext';
import roleProvidersDetailsRoutes from '../../routes/role-providers-details';

const RoleProviderDetailsContent = () => {
  const { roleId } = useRoleProviderDetail();

  return (
    <Box>
      <RouteLoader routes={roleProvidersDetailsRoutes} notfoundRedirect={`/security/roles/providers/${roleId}/users`} />
    </Box>
  );
};

export default memo(RoleProviderDetailsContent);
