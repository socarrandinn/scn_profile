import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindLogistics } from 'modules/inventory/provider/logistics/hooks/useFindLogistics';
import { logisticsColumns } from 'modules/inventory/provider/logistics/constants/logistics.columns';
import { LogisticsListToolbar } from 'modules/inventory/provider/logistics/components/LogisticsListToolbar';

const LogisticsListContainer = () => {
  const { isLoading, error, data } = useFindLogistics();
  return (
    <Box>
      <LogisticsListToolbar />
      <Table
        columns={logisticsColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
    </Box>
  );
};

export default memo(LogisticsListContainer);
