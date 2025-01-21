import { memo, useEffect } from 'react';
import { MediaGalleryContainer } from '../components/MediaGallery';
import { useBannerContext } from 'modules/cms/banners/context/useBannerContext';

const MediaStoreContainer = () => {
  const { setAction } = useBannerContext();

  useEffect(() => {
    setAction({ showCheckMedia: false });
  }, [setAction]);

  return <MediaGalleryContainer />;
};

export default memo(MediaStoreContainer);
