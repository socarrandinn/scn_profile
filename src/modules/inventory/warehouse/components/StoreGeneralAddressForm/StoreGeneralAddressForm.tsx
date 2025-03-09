import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { Control, UseFormClearErrors, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import AddressMapContent from 'modules/common/components/FormSections/AddressInfoFrom/AddressMapContent';
import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';

type StoreGeneralAddressFormProps = {
  error: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;

  setValue?: UseFormSetValue<any>;
  formState: any;
  watch?: UseFormWatch<any>;
  control?: Control<any, any>;
  clearErrors: UseFormClearErrors<any>;
};

const StoreGeneralAddressForm = ({
  error,
  control,
  formState,
  watch,
  setValue,
  isLoading,
  onSubmit,
  clearErrors,
}: StoreGeneralAddressFormProps) => {
  return (
    <div>
      <HandlerError error={error} />
      <Form
        onSubmit={onSubmit}
        control={control}
        isLoading={isLoading}
        id={'form-address'}
        watch={watch}
        noValidate
        setValue={setValue}
      >
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <AddressMapContent
              control={control}
              name={'address'}
              disabledLocation
              countryCode={ADDRESS_COUNTRY_CODE}
              clearErrors={clearErrors}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};
export default memo(StoreGeneralAddressForm);
