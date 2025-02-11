import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import roleDetailsRoutes from '../../routes/role-details';
import { useParams } from 'react-router';

const RoleDetailsContent = ({ route }: { route: string }) => {
  const { id } = useParams();

  return (
    <Box>
      <RouteLoader routes={roleDetailsRoutes} notfoundRedirect={`/security/roles/${route}/${id}/permissions`} />
    </Box>
  );
};

export default memo(RoleDetailsContent);
