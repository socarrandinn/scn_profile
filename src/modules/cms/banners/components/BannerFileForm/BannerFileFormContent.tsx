import { memo } from 'react';
import useBannerCreateForm from '../../hooks/useBannerCreateForm';
import { ICollectionBanner } from '../../interfaces';
import BannerFileForm from '../BannerFileForm/BannerFileForm';
import { Form } from '@dfl/mui-react-common';
type BannerFormContainerProps = {
  banner?: ICollectionBanner;
  view: 'desktop' | 'module';
};

const BannerFormContainer = ({ banner, view }: BannerFormContainerProps) => {
  const { control, onSubmit, error, isLoading } = useBannerCreateForm(banner);

  return (
    <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
      <BannerFileForm view={view} control={control} error={error} isLoading={isLoading} />
    </Form>
  );
};

export default memo(BannerFormContainer);
