import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { AddressInfoForm } from 'modules/common/components/FormSections';
import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';

type GeneralAddressFormProps = {
  error: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  state: string;
  setValue?: UseFormSetValue<any>;
  watch?: UseFormWatch<any>;
  control?: Control<any, any>;
};

const GeneralAddressForm = ({ error, control, watch, setValue, isLoading, onSubmit }: GeneralAddressFormProps) => {
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'} id={'address-form'} watch={watch}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <AddressInfoForm hideZip={true} control={control} watch={watch} setValue={setValue} name={'address'} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(GeneralAddressForm);
