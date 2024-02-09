import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { AddressInput } from 'modules/common/components/Address';

type GeneralAddressFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  state: string;
};

const GeneralAddressForm = ({
  error,
  control,
  isLoading,
  onSubmit,
  state,
}: GeneralAddressFormProps) => {
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'} id={'address-form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <AddressInput name='address' stateValue={state} hideZip={true}/>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(GeneralAddressForm);
