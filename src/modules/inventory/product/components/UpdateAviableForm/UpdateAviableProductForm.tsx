import { FormEventHandler, memo } from 'react';
import { Form, FormSelectAutocompleteField, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { FormSingleMediaUploaderField } from 'modules/common/components/MediaUploader';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type StoreAreaFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  initValues?: any;
};

const UpdateAviableProductForm = ({ error, control, isLoading, onSubmit, initValues }: StoreAreaFormProps) => {
  const { t } = useTranslation('storeArea');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid container rowSpacing={1}>
            <Grid item xs={6}>
              <FormSelectAutocompleteField
                fullWidth
                autoFocus
                required
                label='Status'
                name='status'
                options={['Incrementar', 'Decrementar']}
                value={'Incrementar'}
              />
            </Grid>
            en
            <Grid item xs={6}>
              <FormTextField type='number' required name='name' fullWidth autoFocus />
            </Grid>
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

export default memo(UpdateAviableProductForm);
