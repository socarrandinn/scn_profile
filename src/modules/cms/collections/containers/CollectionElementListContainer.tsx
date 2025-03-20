import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useCollectionDetails } from '../context/CollectionContext';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { useFindCollectionElements } from '../hooks/useFindCollectionElements';
import { testimonyColumns } from 'modules/cms/testimony/constants';
import { categoryColumns } from 'modules/inventory/settings/category/constants';
import { bannerColumns } from 'modules/cms/banners/constants';
import { CollectionElementListToolbar } from '../components/CollectionElementListToolbar';
import { collectionElementActionsColumn } from '../constants/collection-element.columns';
import { productCollectionElementColumns } from 'modules/inventory/product/constants';

type Props = { contentType: COLLECTION_CONTENT_TYPE };

const filterColumns = (columns: any) => {
  const filterColumn = columns?.filter((col: any) => !col.field.match(/actions/));
  return [...filterColumn, collectionElementActionsColumn];
};

const columns = {
  [COLLECTION_CONTENT_TYPE.PRODUCT]: filterColumns(productCollectionElementColumns),
  [COLLECTION_CONTENT_TYPE.BANNER]: filterColumns(bannerColumns),
  [COLLECTION_CONTENT_TYPE.CATEGORY]: filterColumns(categoryColumns),
  [COLLECTION_CONTENT_TYPE.TESTIMONY]: filterColumns(testimonyColumns),
};
const CollectionElementListContainer = ({ contentType }: Props) => {
  const { collectionId } = useCollectionDetails();
  const noPagination = [COLLECTION_CONTENT_TYPE.PRODUCT].some((c) => c === contentType);

  const { data, error, isLoading } = useFindCollectionElements(collectionId as string, contentType);

  return (
    <Box>
      <CollectionElementListToolbar contentType={contentType} />
      <Table
        columns={columns[contentType]}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        hidePagination={noPagination}
      />
    </Box>
  );
};

export default memo(CollectionElementListContainer);
