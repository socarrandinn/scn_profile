import { memo, useMemo } from 'react';
import { HeadCell, Table, TabsFilter } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindCollections } from 'modules/cms/collections/hooks/useFindCollections';
import { collectionsBannerColumns, collectionsColumns } from 'modules/cms/collections/constants/collections.columns';
import { CollectionsListToolbar } from 'modules/cms/collections/components/CollectionsListToolbar';
import CollectionsEditModal from 'modules/cms/collections/containers/CollectionsEditModal';

import { useSearchParams } from 'react-router-dom';

const _columns: Record<string, Array<HeadCell<any>>> = {
  banner: collectionsBannerColumns,
};

const CollectionsListContainer = () => {
  const { isLoading, error, data } = useFindCollections();
  const [searchParams] = useSearchParams();
  const columns = useMemo(() => {
    const value = searchParams.get('fview') as string;
    return _columns[value] ?? collectionsColumns;
  }, [searchParams]);

  return (
    <Box>
      <TabsFilter translation={'collection'} defaultView={'all'} />
      <CollectionsListToolbar />
      <Table columns={columns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} select />
      <CollectionsEditModal />
    </Box>
  );
};

export default memo(CollectionsListContainer);
