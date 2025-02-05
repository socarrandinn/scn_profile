import { memo, Suspense } from 'react';
import { PageLayout } from 'layouts/index';
import { CollectionProvider } from '../context/CollectionContext';
import { CollectionHeaderDetails } from '../components/CollectionHeaderDetails';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { CollectionElementListPage } from '../pages';

import { PageLoader } from '@dfl/mui-react-common';
type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
};
const CollectionDetailContainer = ({ contentType = COLLECTION_CONTENT_TYPE.PRODUCT }: Props) => (
  <CollectionProvider contentType={contentType}>
    <CollectionHeaderDetails contentType={contentType} />
    <Suspense fallback={<PageLoader size={'screen'} />}>
      <PageLayout>
        <CollectionElementListPage contentType={contentType} />
      </PageLayout>
    </Suspense>
  </CollectionProvider>
);

export default memo(CollectionDetailContainer);
