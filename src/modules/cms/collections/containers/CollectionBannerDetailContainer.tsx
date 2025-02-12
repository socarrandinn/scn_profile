import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { CollectionBannerDetailsContent } from '../../banners/components/CollectionBannerDetailsContent';
import { CollectionProvider } from '../context/CollectionContext';
import { CollectionHeaderDetails } from '../components/CollectionHeaderDetails';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';

type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
};
const CollectionBannerDetailContainer = ({ contentType }: Props) => (
  <CollectionProvider contentType={contentType}>
    <CollectionHeaderDetails contentType={contentType} />
    <PageLayout>
      <CollectionBannerDetailsContent />
    </PageLayout>
  </CollectionProvider>
);

export default memo(CollectionBannerDetailContainer);
