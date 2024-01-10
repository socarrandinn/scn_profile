import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';
import Box from '@mui/material/Box';
import { ManufactureDetail } from 'modules/inventory/provider/manufacture/context/ManufactureDetail';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import manufactureDetailRoutes from 'modules/inventory/provider/manufacture/routes/manufacture-detail.routes';

const ManufactureDetailContent = () => {
  const { manufacture, isLoading, manufacturerId } = ManufactureDetail();
  useBreadcrumbName(manufacture?._id || '', manufacture?.name, isLoading);
  return (
    <Box pt={1}>
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
