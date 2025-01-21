import { Form } from '@dfl/mui-react-common';
import { BannerFileForm } from 'modules/cms/banners/components/BannerFileForm';
import { useBannerContext } from 'modules/cms/banners/context/useBannerContext';
import { memo } from 'react';
import { useForm } from 'react-hook-form';

const MediaUploadContainer = () => {
  const { control } = useForm();
  const { view } = useBannerContext();
  return (
    <Form onSubmit={() => {}} control={control} isLoading={false} size={'small'} id={'form'} dark>
      <BannerFileForm view={view} control={control} error={null} isLoading={false} />
    </Form>
  );
};

export default memo(MediaUploadContainer);
