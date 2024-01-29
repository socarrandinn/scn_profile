import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import { Box, BoxProps } from '@mui/material';
import { useClientDetails } from 'modules/crm/clients/context/ClientDetailsContext';
import clientDetailsRoutes from 'modules/crm/clients/routes/client.details.routes';

const ClientTabsContent = (props: BoxProps) => {
  const { client } = useClientDetails();

  return (
    <Box {...props}>
      <RouteLoader routes={clientDetailsRoutes} notfoundRedirect={`/crm/clients/${client?._id as string}/orders`} />
    </Box>
  );
};

export default memo(ClientTabsContent);
