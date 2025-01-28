import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { CollectionProvider } from '../context/CollectionContext';
import { CollectionHeaderDetails } from '../components/CollectionHeaderDetails';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { CollectionDetailsContent } from '../components/CollectionDetailsContent';
type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
};
const CollectionDetailContainer = ({ contentType = COLLECTION_CONTENT_TYPE.PRODUCT }: Props) => (
  <CollectionProvider>
    <CollectionHeaderDetails contentType={contentType} />
    <PageLayout>
      <CollectionDetailsContent contentType={contentType} />
    </PageLayout>
  </CollectionProvider>
);

export default memo(CollectionDetailContainer);
