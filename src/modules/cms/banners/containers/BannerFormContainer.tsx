import { memo } from 'react';
import { ICollectionBanner } from '../interfaces';
import useBannerCreateForm from '../hooks/useBannerCreateForm';
import BannerFileForm from '../components/BannerDetails/BannerContent/BannerFileForm/BannerFileForm';
type BannerFormContainerProps = {
  banner?: ICollectionBanner;
  view: 'desktop' | 'module';
};

const BannerFormContainer = ({ banner, view }: BannerFormContainerProps) => {
  const { control, onSubmit, error, isLoading } = useBannerCreateForm(banner);
  return <BannerFileForm view={view} control={control} onSubmit={onSubmit} error={error} isLoading={isLoading} />;
};

export default memo(BannerFormContainer);
