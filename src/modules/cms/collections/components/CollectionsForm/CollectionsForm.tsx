import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { COLLECTIONS_ERRORS } from 'modules/cms/collections/constants';

type CollectionsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const CollectionsForm = ({ error, control, isLoading, onSubmit }: CollectionsFormProps) => {
  const { t } = useTranslation('collections');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth multiline minRows={3} name='description' label={t('fields.description')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(CollectionsForm);
