import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type SupplierGeneralBasicFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const SupplierGeneralBasicForm = ({ error, control, isLoading, onSubmit }: SupplierGeneralBasicFormProps) => {
  const { t } = useTranslation('provider');
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'} id={'basic-form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={6}>
            <FormTextField name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField
              type='number'
              fullWidth
              autoFocus
              required
              name='commission'
              label={t('fields.commission')}
              inputProps={{
                inputMode: 'numeric',
                step: 0.1,
              }}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(SupplierGeneralBasicForm);
