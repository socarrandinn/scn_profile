import { memo } from 'react';
import { Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindDispatches } from 'modules/sales/dispatch/hooks/useFindDispatches';
import { dispatchColumns } from 'modules/sales/dispatch/constants/dispatch.columns';
import { DispatchListToolbar } from 'modules/sales/dispatch/components/DispatchListToolbar';
import DispatchEditModal from 'modules/sales/dispatch/containers/DispatchEditModal';

const DispatchListContainer = () => {
  const { isLoading, error, data } = useFindDispatches();
  return (
    <Box>
      <TabsFilter translation={'dispatch'} defaultView={'all'} />
      <DispatchListToolbar />
      <Table
        columns={dispatchColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <DispatchEditModal />
    </Box>
  );
};

export default memo(DispatchListContainer);
