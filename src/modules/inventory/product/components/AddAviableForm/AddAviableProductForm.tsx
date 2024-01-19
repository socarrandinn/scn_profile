import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormSingleMediaUploaderField } from 'modules/common/components/MediaUploader';

type StoreAreaFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const AddAviableProductForm = ({ error, control, isLoading, onSubmit }: StoreAreaFormProps) => {
  const { t } = useTranslation('product');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('section.inventory.store')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField type='number' fullWidth autoFocus required name='name' label={t('section.inventory.available')} />
          </Grid>
          <Grid item xs={12}>
            <FormSingleMediaUploaderField required name='name' label={t('section.inventory.document')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth multiline minRows={3} name='description' label={t('fields.description')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(AddAviableProductForm);
