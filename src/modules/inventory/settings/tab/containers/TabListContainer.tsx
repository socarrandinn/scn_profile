import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindTabs } from 'modules/inventory/settings/tab/hooks/useFindTabs';
import { tabColumns } from 'modules/inventory/settings/tab/constants/tab.columns';
import { TabListToolbar } from 'modules/inventory/settings/tab/components/TabListToolbar';
import TabEditModal from 'modules/inventory/settings/tab/containers/TabEditModal';

const TabListContainer = () => {
  const { isLoading, error, data } = useFindTabs();
  return (
    <Box>
      <TabListToolbar />
      <Table
        columns={tabColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <TabEditModal />
    </Box>
  );
};

export default memo(TabListContainer);
