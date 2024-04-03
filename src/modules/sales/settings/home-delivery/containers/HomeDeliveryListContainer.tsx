import { memo } from 'react';
import { Table, TableProvider } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindHomeDeliveries } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveries';
import { homeDeliveryColumns } from 'modules/sales/settings/home-delivery/constants/home-delivery.columns';
import { HomeDeliveryListToolbar } from 'modules/sales/settings/home-delivery/components/HomeDeliveryListToolbar';
import HomeDeliveryEditModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryEditModal';
import { homeDeliveryFilters } from 'modules/sales/settings/home-delivery/constants';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HomeDeliveryListContainer = () => {
  const { isLoading, error, data } = useFindHomeDeliveries();
  const { t } = useTranslation('homeDelivery');
  return (
    <TableProvider id={'homeDeliveries'} filters={homeDeliveryFilters}>
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
