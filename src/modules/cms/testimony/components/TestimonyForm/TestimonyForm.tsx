import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormUploadImage } from 'modules/common/components/UploadImage';
import { AddPhotoAlternate, CameraEnhance } from '@mui/icons-material';

type TestimonyFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  formState: any;
  onSubmit: FormEventHandler | undefined;
};

const TestimonyForm = ({ error, control, isLoading, onSubmit, formState }: TestimonyFormProps) => {
  const { t } = useTranslation('testimony');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} display={'flex'} justifyContent={'center'}>
            <FormUploadImage name={'image'} size={100} error={formState?.errors?.image?.url}>
              <AddPhotoAlternate />
            </FormUploadImage>
          </Grid>
          <Grid item xs={12}>
            <FormTextField required fullWidth name='personName' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth required name='title' label={t('fields.title')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              required
              multiline
              minRows={3}
              name='comment'
              label={t('fields.comment')}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(TestimonyForm);
