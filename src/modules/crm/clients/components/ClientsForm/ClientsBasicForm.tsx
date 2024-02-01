import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type ClientBasicFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ClientBasicForm = ({ error, control, isLoading, onSubmit }: ClientBasicFormProps) => {
  const { t } = useTranslation('clients');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'ClientBasicForm'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={6}>
            <FormTextField fullWidth autoFocus required name='firstName' label={t('fields.firstName')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField fullWidth required name='lastName' label={t('fields.lastName')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(ClientBasicForm);
