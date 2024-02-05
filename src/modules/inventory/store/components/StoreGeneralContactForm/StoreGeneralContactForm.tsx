import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import FormPhoneInputArray from 'modules/common/components/FormContactInput/phone/FormPhoneInputArray';
import FormEmailInputArray from 'modules/common/components/FormContactInput/email/FormEmailInputArray';
import { useTranslation } from 'react-i18next';

type StoreGeneralContactFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const StoreGeneralContactForm = ({ error, control, isLoading, onSubmit }: StoreGeneralContactFormProps) => {
  const { t } = useTranslation('provider');
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-store-contact'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormPhoneInputArray name={'contacts.phones'} label={t('fields.contact.phones')} required />
          </Grid>
          <Grid item xs={12}>
            <FormEmailInputArray name={'contacts.emails'} label={t('fields.contact.emails')} required />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(StoreGeneralContactForm);
