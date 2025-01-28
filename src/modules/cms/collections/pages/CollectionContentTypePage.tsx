import { memo, useEffect } from 'react';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { CollectionProvider, useCollectionDetails } from '../context/CollectionContext';
import CollectionBannerDetails from './CollectionBannerDetails';
import { PageLoader } from '@dfl/mui-react-common';
import { useNavigate, useParams } from 'react-router';
import { PageLayout } from 'layouts/index';
import CollectionDetailContainer from '../containers/CollectionDetailContainer';

const CollectionContentTypePage = () => {
  const { contentType } = useParams();
  return (
    <CollectionProvider>
      <CollectionContentTypeSwitch contentType={contentType as COLLECTION_CONTENT_TYPE} />
    </CollectionProvider>
  );
};

const CollectionContentTypeSwitch = ({ contentType }: { contentType: COLLECTION_CONTENT_TYPE }) => {
  const { isLoading, collection } = useCollectionDetails();
  const navigate = useNavigate();
  useEffect(() => {
    if (collection && collection?.contentType !== contentType) {
      navigate('/cms/collections');
    }
  }, [collection, collection?.contentType, contentType, navigate]);

  if (isLoading) return <PageLoader />;

  switch (contentType) {
    case COLLECTION_CONTENT_TYPE.BANNER:
      return <CollectionBannerDetails />;
    case COLLECTION_CONTENT_TYPE.PRODUCT:
      return (
        <PageLayout>
          <CollectionDetailContainer contentType={COLLECTION_CONTENT_TYPE.PRODUCT} />
        </PageLayout>
      );
    case COLLECTION_CONTENT_TYPE.CATEGORY:
      return <>COLLECTION CATEGORY</>;
    case COLLECTION_CONTENT_TYPE.TESTIMONY:
      return <>COLLECTION TESTIMONY</>;
    default:
      return null;
  }
};

export default memo(CollectionContentTypePage);
