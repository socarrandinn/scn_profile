import { memo } from 'react';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import CollectionsListContainer from 'modules/cms/collections/containers/CollectionsListContainer';
import { collectionsBannerFilters, collectionsFilters } from 'modules/cms/collections/constants/collections.filters';
import { collectionViewTabs } from '../constants/collection.viewtabs';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
};
const CollectionsList = ({ contentType }: Props) => {
  return (
    <TableProvider id={`collections-${contentType}`} filters={contentType === COLLECTION_CONTENT_TYPE.BANNER ? collectionsBannerFilters : collectionsFilters}>
      <FilterViewProvider views={collectionViewTabs}>
        <CollectionsListContainer contentType={contentType} />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(CollectionsList);
