import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormPhoneInput } from 'components/libs/PhoneInput';
import { UserBasicForm } from 'modules/security/users/components/UserBasicForm';

type ClientsFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ClientsForm = ({ error, control, isLoading, onSubmit }: ClientsFormProps) => {
  const { t } = useTranslation('clients');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'ClientsForm'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <UserBasicForm />
          <Grid item xs={12}>
            <FormPhoneInput fullWidth name='phone' label={t('fields.phone')} dark />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(ClientsForm);
