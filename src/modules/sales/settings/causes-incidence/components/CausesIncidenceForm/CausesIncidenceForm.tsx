import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type CausesIncidenceFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const CausesIncidenceForm = ({ error, control, isLoading, onSubmit }: CausesIncidenceFormProps) => {
  const { t } = useTranslation('causesIncidence');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='type' label={t('fields.type')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              multiline
              minRows={3}
              required
              name='description'
              label={t('fields.description')}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(CausesIncidenceForm);
