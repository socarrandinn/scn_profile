import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { CollectionBannerHeaderDetails } from '../../banners/components/CollectionBannerHeaderDetails';
import { CollectionBannerDetailsContent } from '../../banners/components/CollectionBannerDetailsContent';
import { CollectionProvider } from '../context/CollectionContext';
import CollectionBannerDetailSection from 'modules/cms/banners/components/CollectionBannerDetailsContent/CollectionBannerDetailSection';

const CollectionBannerDetailContainer = () => (
  <CollectionProvider>
    <CollectionBannerHeaderDetails />
    <PageLayout>
      <CollectionBannerDetailsContent />
      <CollectionBannerDetailSection />
    </PageLayout>
  </CollectionProvider>
);

export default memo(CollectionBannerDetailContainer);
