import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindHomeDeliveries } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveries';
import { homeDeliveryColumns } from 'modules/sales/settings/home-delivery/constants/home-delivery.columns';
import { HomeDeliveryListToolbar } from 'modules/sales/settings/home-delivery/components/HomeDeliveryListToolbar';
import HomeDeliveryEditModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryEditModal';

const HomeDeliveryListContainer = () => {
  const { isLoading, error, data } = useFindHomeDeliveries();
  return (
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
  );
};

export default memo(HomeDeliveryListContainer);
