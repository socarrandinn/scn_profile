import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import Box from '@mui/material/Box';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import manufactureDetailRoutes from 'modules/inventory/provider/manufacture/routes/manufacture-detail.routes';
import { useManufactureDetailContext } from '../../context/ManufactureDetail';

const ManufactureDetailContent = () => {
  const { manufacture, isLoading, manufacturerId } = useManufactureDetailContext();
  useBreadcrumbName(manufacture?._id || '', manufacture?.name, isLoading);
  return (
    <Box>
      <Box>
        <RouteLoader
          routes={manufactureDetailRoutes}
          notfoundRedirect={`/inventory/settings/manufactures/${manufacturerId as string}/general`}
        />
      </Box>
    </Box>
  );
};

export default memo(ManufactureDetailContent);
