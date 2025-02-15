import { memo, useMemo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindCollections } from 'modules/cms/collections/hooks/useFindCollections';
import { _CollectionColumns, collectionsColumns } from 'modules/cms/collections/constants/collections.columns';
import { CollectionsListToolbar } from 'modules/cms/collections/components/CollectionsListToolbar';
import CollectionsEditModal from 'modules/cms/collections/containers/CollectionsEditModal';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
};
const CollectionsListContainer = ({ contentType }: Props) => {
  const { isLoading, error, data } = useFindCollections(contentType);

  const columns = useMemo(() => {
    return _CollectionColumns[contentType] ?? collectionsColumns;
  }, [contentType]);

  return (
    <Box>
      <CollectionsListToolbar contentType={contentType} />
      <Table columns={columns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} />
      <CollectionsEditModal contentType={contentType} />
    </Box>
  );
};

export default memo(CollectionsListContainer);
