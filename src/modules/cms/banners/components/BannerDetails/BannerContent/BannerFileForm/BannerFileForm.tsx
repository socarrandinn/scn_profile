import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormFileDropZone } from 'components/FileDropZone/FileDropZone';
import { ACCEPT_ONLY_IMAGES, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';

type BannerFileFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  view: 'desktop' | 'module';
};

const BannerFileForm = ({ error, control, isLoading, onSubmit, view }: BannerFileFormProps) => {
  const { t } = useTranslation('collection');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormFileDropZone
              name='file'
              dropTitle={t('stock:warehouse.import.fields.uploadFile')}
              control={control}
              required
              showDropzoneWrapper={!isLoading}
              documentName='Plantilla productos.xlsx'
              inputProps={{
                accept: ACCEPT_ONLY_IMAGES,
                maxFiles: 1,
                maxSize: MAX_SIZE_FILE, // 5mb
              }}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(BannerFileForm);
