import { memo, useEffect, useMemo } from 'react';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('fview') as string;
  const { isLoading, error, data } = useFindCollections(value);

  const columns = useMemo(() => {
    return _columns[value] ?? collectionsColumns;
  }, [value]);

  useEffect(() => {
    setSearchParams({ page: '0', fview: 'banner' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <TabsFilter translation={'collection'} defaultView={'banner'} />
      <CollectionsListToolbar />
      <Table columns={columns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} select />
      <CollectionsEditModal />
    </Box>
  );
};

export default memo(CollectionsListContainer);
