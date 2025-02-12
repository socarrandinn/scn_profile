import defaultMedia from 'assets/images/media/default.webp';
import { imageUrl } from '@dfl/mui-react-common';
import { useMemo } from 'react';
import { IBanner } from '../../interfaces';
import BannerAction from './BannerAction';
import ImageMedia from 'modules/cms/medias/components/MediaGallery/MediaItem/ImageMedia';

type Props = {
  banner: IBanner;
};

const BannerItem = ({ banner }: Props) => {
  const thumb = useMemo(() => {
    if (banner?.desktopImage?.thumb) return imageUrl(banner?.desktopImage?.thumb);
    return defaultMedia;
  }, [banner?.desktopImage?.thumb]);

  return <ImageMedia Action={<BannerAction banner={banner} />} image={thumb} name={banner?.title ?? ''} />;
};

export default BannerItem;
