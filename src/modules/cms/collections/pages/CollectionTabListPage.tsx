import { Suspense } from 'react';
import { PageTabPaperLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import { collectionTypeTabs } from '../constants/collections-tabs.details';
import collectionContentTypeRoutes from '../routes/collection-content-type';

const CollectionTabList = () => {
  return (
    <PageTabPaperLayout prefix={'/cms/collections'} tabs={collectionTypeTabs}>
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader routes={collectionContentTypeRoutes} notfoundRedirect={'/cms/collections/banners'} />
      </Suspense>
    </PageTabPaperLayout>
  );
};
export default CollectionTabList;
