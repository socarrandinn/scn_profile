import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

type LogisticGeneralBasicFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const LogisticGeneralBasicForm = ({ error, control, isLoading, onSubmit }: LogisticGeneralBasicFormProps) => {
  const { t } = useTranslation('provider');
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'} id={'basic-form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField name='name' label={t('fields.name')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(LogisticGeneralBasicForm);
