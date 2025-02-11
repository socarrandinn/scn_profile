import { memo } from 'react';
import useBannerCreateForm from '../../hooks/useBannerCreateForm';
import { Form } from '@dfl/mui-react-common';
import { useBannerContext } from '../../context/useBannerContext';
import { BANNER_ELEMENT_OPERATION, IBanner } from '../../interfaces/IBanner';
import BannerFileForm from './BannerFileForm';
type BannerFileFormContentProps = {
  banner?: IBanner;
};

const BannerFileFormContent = ({ banner }: BannerFileFormContentProps) => {
  const { control, onSubmit, error, isLoading } = useBannerCreateForm({
    defaultValues: {
      banner: banner as IBanner,
      collection: '',
      operation: BANNER_ELEMENT_OPERATION.NEW_ELEMENT,
    },
  });
  const view = useBannerContext((state) => state.view);
  return (
    <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
      <BannerFileForm view={view} control={control} error={error} isLoading={isLoading} />
    </Form>
  );
};

export default memo(BannerFileFormContent);
