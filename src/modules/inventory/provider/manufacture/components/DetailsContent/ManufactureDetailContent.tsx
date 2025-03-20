import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import manufactureDetailRoutes from '../../routes/manufacture-detail.routes';

const ManufactureDetailContent = () => {
  const { id } = useParams();
  return (
    <Box>
      <RouteLoader
        routes={manufactureDetailRoutes}
        notfoundRedirect={`/inventory/settings/manufactures/${id as string}/general`}
      />
    </Box>
  );
};
export default memo(ManufactureDetailContent);
