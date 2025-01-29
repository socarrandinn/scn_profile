import { memo, useEffect } from 'react';
import { COLLECTION_CONTENT_TYPE } from '../constants/collection-types';
import { CollectionProvider, useCollectionDetails } from '../context/CollectionContext';
import { ChildrenProps, PageLoader } from '@dfl/mui-react-common';
import { useNavigate, useParams } from 'react-router';
import { PageLayout } from 'layouts/index';
import CollectionDetailContainer from '../containers/CollectionDetailContainer';
import CollectionBannerDetailContainer from '../containers/CollectionBannerDetailContainer';

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
      return (
        <Layout>
          <CollectionBannerDetailContainer contentType={COLLECTION_CONTENT_TYPE.BANNER} />
        </Layout>
      );
    case COLLECTION_CONTENT_TYPE.PRODUCT:
      return (
        <Layout>
          <CollectionDetailContainer contentType={COLLECTION_CONTENT_TYPE.PRODUCT} />
        </Layout>
      );
    case COLLECTION_CONTENT_TYPE.CATEGORY:
      return (
        <Layout>
          <CollectionDetailContainer contentType={COLLECTION_CONTENT_TYPE.CATEGORY} />
        </Layout>
      );
    case COLLECTION_CONTENT_TYPE.TESTIMONY:
      return (
        <Layout>
          <CollectionDetailContainer contentType={COLLECTION_CONTENT_TYPE.TESTIMONY} />
        </Layout>
      );
    default:
      return null;
  }
};

export default memo(CollectionContentTypePage);

const Layout = ({ children }: ChildrenProps) => {
  return <PageLayout mb={3}>{children}</PageLayout>;
};
