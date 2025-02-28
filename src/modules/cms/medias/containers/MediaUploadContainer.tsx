import { Form } from '@dfl/mui-react-common';
import { BannerFileForm } from 'modules/cms/banners/components/BannerFileForm';
import { useCollectionBannerContext } from 'modules/cms/banners/context/useCollectionBannerContext';
import { memo } from 'react';
import { useForm } from 'react-hook-form';

const MediaUploadContainer = () => {
  const { control } = useForm();
  const { view } = useCollectionBannerContext();
  return (
    <Form onSubmit={() => {}} control={control} isLoading={false} size={'small'} id={'form'} dark>
      <BannerFileForm
        view={view}
        control={control}
        error={null}
        isLoading={false}
        imageOption={{
          desktop: {
            sizes: [],
            noExt: false,
            width: 0
          },
          mobile: {
            sizes: [],
            noExt: false,
            width: 0
          },
        }}
      />
    </Form>
  );
};

export default memo(MediaUploadContainer);
