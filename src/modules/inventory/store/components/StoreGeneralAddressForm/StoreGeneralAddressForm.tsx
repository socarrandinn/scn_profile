import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { AddressInput } from 'modules/common/components/Address';

type StoreGeneralAddressFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  state: string;
};

const StoreGeneralAddressForm = ({
  error,
  control,
  isLoading,
  onSubmit,
  state,
}: StoreGeneralAddressFormProps) => {
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <AddressInput name='address' stateValue={state} hideZip />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(StoreGeneralAddressForm);
