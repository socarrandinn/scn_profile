import { memo, useEffect, useMemo } from 'react';
import { COLLECTION_CONTENT_TYPE, getContentTypeKeyByValue } from '../constants/collection-types';
import { useCollectionDetails } from '../context/CollectionContext';
import { ChildrenProps, PageLoader } from '@dfl/mui-react-common';
import { useNavigate, useParams } from 'react-router';
import { PageLayout } from 'layouts/index';
import CollectionDetailContainer from '../containers/CollectionDetailContainer';
import CollectionBannerDetailContainer from '../containers/CollectionBannerDetailContainer';

const CollectionContentTypePage = () => {
  const { contentType } = useParams();
  return <CollectionContentTypeSwitch contentType={contentType as string} />;
};

const CollectionContentTypeSwitch = ({ contentType }: { contentType: string }) => {
  const { isLoading, collection } = useCollectionDetails();
  const navigate = useNavigate();
  const type = useMemo(() => getContentTypeKeyByValue(contentType), [contentType]);

  useEffect(() => {
    if (collection && type !== collection?.contentType) {
      navigate('/cms/collections');
    }
  }, [collection, type, contentType, navigate]);

  if (isLoading) return <PageLoader />;

  switch (type) {
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
