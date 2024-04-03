import { memo } from 'react';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { homeDeliveryColumns } from 'modules/sales/settings/home-delivery/constants/home-delivery.columns';
import { HomeDeliveryListToolbar } from 'modules/sales/settings/home-delivery/components/HomeDeliveryListToolbar';
import HomeDeliveryEditModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryEditModal';
import { homeDeliveryFilters } from 'modules/sales/settings/home-delivery/constants';

const HomeDeliveryListContainer = () => {
  const { isLoading, error, data } = useFindHomeDeliveryPlaces();
  return (
    <TableProvider id={'homeDeliveries'}>
      <Box>
        <HomeDeliveryListToolbar />
        <Table
          columns={homeDeliveryColumns}
          data={data?.data}
          total={data?.total}
          isLoading={isLoading}
          error={error}
          select
        />
        <HomeDeliveryEditModal />
      </Box>
    </TableProvider>
  );
};

export default memo(HomeDeliveryListContainer);
