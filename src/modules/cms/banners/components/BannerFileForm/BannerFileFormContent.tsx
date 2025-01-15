import { memo } from 'react';
import useBannerCreateForm from '../../hooks/useBannerCreateForm';
import { ICollectionBanner } from '../../interfaces';
import BannerFileForm from '../BannerFileForm/BannerFileForm';
import { Form } from '@dfl/mui-react-common';
import { useBannerContext } from '../../context/useBannerContext';
type BannerFileFormContentProps = {
  banner?: ICollectionBanner;
};

const BannerFileFormContent = ({ banner }: BannerFileFormContentProps) => {
  const { control, onSubmit, error, isLoading } = useBannerCreateForm(banner);
  const view = useBannerContext((state) => state.view);
  return (
    <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
      <BannerFileForm view={view} control={control} error={error} isLoading={isLoading} />
    </Form>
  );
};

export default memo(BannerFileFormContent);
