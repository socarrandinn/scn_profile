import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { inventoryProductColumns } from 'modules/inventory/product/constants/product-inventory.columns';
import { useCollectionDetails } from '../context/CollectionContext';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { useFindCollectionElements } from '../hooks/useFindCollectionElements';
import { testimonyColumns } from 'modules/cms/testimony/constants';
import { categoryColumns } from 'modules/inventory/settings/category/constants';
import { bannerColumns } from 'modules/cms/banners/constants';
import { CollectionElementListToolbar } from '../components/CollectionElementListToolbar';
import { collectionElementActionsColumn } from '../constants/collection-element.columns';

type Props = { contentType: COLLECTION_CONTENT_TYPE };

const filterColumns = (columns: any) => {
  const filterColumn = columns?.filter((col: any) => !col.field.match(/actions/));
  return [...filterColumn, collectionElementActionsColumn];
};

const columns = {
  [COLLECTION_CONTENT_TYPE.PRODUCT]: filterColumns(inventoryProductColumns),
  [COLLECTION_CONTENT_TYPE.BANNER]: filterColumns(bannerColumns),
  [COLLECTION_CONTENT_TYPE.CATEGORY]: filterColumns(categoryColumns),
  [COLLECTION_CONTENT_TYPE.TESTIMONY]: filterColumns(testimonyColumns),
};
const CollectionElementListContainer = ({ contentType }: Props) => {
  const { collectionId } = useCollectionDetails();
  const { data, error, isLoading } = useFindCollectionElements(collectionId);

  return (
    <Box>
      <CollectionElementListToolbar contentType={contentType}/>
      <Table columns={columns[contentType]} data={data?.data} total={data?.total} isLoading={isLoading} error={error} />
    </Box>
  );
};

export default memo(CollectionElementListContainer);
