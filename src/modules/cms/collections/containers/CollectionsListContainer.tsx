import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindCollections } from 'modules/cms/collections/hooks/useFindCollections';
import { collectionsColumns } from 'modules/cms/collections/constants/collections.columns';
import { CollectionsListToolbar } from 'modules/cms/collections/components/CollectionsListToolbar';
import CollectionsEditModal from 'modules/cms/collections/containers/CollectionsEditModal';

const CollectionsListContainer = () => {
  const { isLoading, error, data } = useFindCollections();
  return (
    <Box>
      <CollectionsListToolbar />
      <Table
        columns={collectionsColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <CollectionsEditModal />
    </Box>
  );
};

export default memo(CollectionsListContainer);
