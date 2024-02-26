import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindExpressDeliveries } from 'modules/sales/settings/express-delivery/hooks/useFindExpressDeliveries';
import { expressDeliveryColumns } from 'modules/sales/settings/express-delivery/constants/express-delivery.columns';
import { ExpressDeliveryListToolbar } from 'modules/sales/settings/express-delivery/components/ExpressDeliveryListToolbar';
import ExpressDeliveryEditModal from 'modules/sales/settings/express-delivery/containers/ExpressDeliveryEditModal';

const ExpressDeliveryListContainer = () => {
  const { isLoading, error, data } = useFindExpressDeliveries();
  return (
    <Box>
      <ExpressDeliveryListToolbar />
      <Table
        columns={expressDeliveryColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <ExpressDeliveryEditModal />
    </Box>
  );
};

export default memo(ExpressDeliveryListContainer);
