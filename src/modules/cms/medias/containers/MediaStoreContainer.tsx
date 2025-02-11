import { memo, useEffect } from 'react';
import { MediaGalleryContainer } from '../components/MediaGallery';
import { useCollectionBannerContext } from 'modules/cms/banners/context/useCollectionBannerContext';

const MediaStoreContainer = () => {
  const { setAction } = useCollectionBannerContext();

  useEffect(() => {
    setAction({ showCheckMedia: false });
  }, [setAction]);

  return <MediaGalleryContainer />;
};

export default memo(MediaStoreContainer);
