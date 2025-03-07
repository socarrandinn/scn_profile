import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import AddressMapContent from 'modules/common/components/FormSections/AddressInfoFrom/AddressMapContent';

type DistributionCentersGeneralAddressFormProps = {
  countryCode: string;
  error: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  setValue?: UseFormSetValue<any>;
  watch?: UseFormWatch<any>;
  control?: Control<any, any>;
};

const DistributionCentersGeneralAddressForm = ({
  countryCode,
  error,
  control,
  setValue,
  isLoading,
  onSubmit,
}: DistributionCentersGeneralAddressFormProps) => {
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} id={'form-address'} setValue={setValue}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <AddressMapContent name={'address'} control={control} disabledLocation countryCode={countryCode} />
            {/* <AddressInfoForm hideZip={true} control={control} watch={watch} setValue={setValue} name={'address'} /> */}
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(DistributionCentersGeneralAddressForm);
