import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import CollectionBannerDetailContainer from '../containers/CollectionBannerDetailContainer';

const CollectionBannerDetails = () => {
  return (
    <PageLayout>
      <CollectionBannerDetailContainer />
    </PageLayout>
  );
};

export default memo(CollectionBannerDetails);
