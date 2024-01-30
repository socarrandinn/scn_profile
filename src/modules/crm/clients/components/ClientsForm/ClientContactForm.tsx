import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormPhoneInput } from 'components/libs/PhoneInput';

type ClientContactFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ClientContactForm = ({ error, control, isLoading, onSubmit }: ClientContactFormProps) => {
  const { t } = useTranslation('clients');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'ClientContactForm'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={6}>
            <FormTextField fullWidth name='email' label={t('fields.email')} />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormPhoneInput fullWidth name='phone' label={t('fields.phone')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(ClientContactForm);
