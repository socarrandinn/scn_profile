import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ContactsInfoForm from 'modules/common/components/FormSections/ContactInfoFrom/ContactsInfoForm';
import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import AddressInfoForm from 'modules/common/components/FormSections/AddressInfoFrom/AddressInfoForm';

type StoreFormProps = {
  error: any;
  setValue?: UseFormSetValue<any>;
  watch?: UseFormWatch<any>;
  control?: Control<any, any>;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const StoreForm = ({ error, control, isLoading, onSubmit, setValue, watch }: StoreFormProps) => {
  const { t } = useTranslation('warehouse');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} id={'form'} dark watch={watch}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth multiline minRows={3} name='description' label={t('fields.description')} />
          </Grid>
          <Grid item xs={12}>
            <ContactsInfoForm />
          </Grid>
          <Grid item xs={12}>
            <AddressInfoForm control={control} setValue={setValue} watch={watch} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(StoreForm);
