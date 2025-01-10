import { memo } from 'react';
import BannerFileFormContent from '../components/BannerFileForm/BannerFileFormContent';
type CollectionBannerListContainerProps = {
  view: 'desktop' | 'module';
};

const CollectionBannerListContainer = ({ view }: CollectionBannerListContainerProps) => {
  //  const { data, isLoading, error } = useFindBanners();
  return <BannerFileFormContent view={view} />;
};

export default memo(CollectionBannerListContainer);
