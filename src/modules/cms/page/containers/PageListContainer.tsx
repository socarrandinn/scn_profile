import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindPages } from 'modules/cms/page/hooks/useFindPages';
import { pageColumns } from 'modules/cms/page/constants/page.columns';
import { PageListToolbar } from 'modules/cms/page/components/PageListToolbar';
import PageEditModal from 'modules/cms/page/containers/PageEditModal';

const PageListContainer = () => {
  const { isLoading, error, data } = useFindPages();
  return (
    <Box>
      <PageListToolbar />
      <Table
        columns={pageColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
      />
      <PageEditModal />
    </Box>
  );
};

export default memo(PageListContainer);
