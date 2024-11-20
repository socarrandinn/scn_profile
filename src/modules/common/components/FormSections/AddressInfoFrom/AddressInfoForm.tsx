import { Grid } from '@mui/material';

import { GoogleMapAddressProvider } from 'contexts/GoogleMapAddressProvider';
import { AddressFormFields } from 'components/AddressFormFields';
import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';

type AddressInfoProps = {
  name?: string;
  required?: boolean;
  hideZip?: boolean;
  setValue?: UseFormSetValue<any>;
  watch?: UseFormWatch<any>;
  control?: Control<any, any>;
};

const AddressInfoForm = ({
  name = 'address',
  setValue,
  watch,
  control,
}: AddressInfoProps) => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <GoogleMapAddressProvider addressFieldName={name} watch={watch} setValue={setValue}>
          <AddressFormFields addressFieldName={name} watch={watch} setValue={setValue} control={control} />
        </GoogleMapAddressProvider>
      </Grid>
    </Grid>
  );
};

export default AddressInfoForm;
