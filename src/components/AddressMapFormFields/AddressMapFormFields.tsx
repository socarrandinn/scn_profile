import { FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { ERRORS } from 'constants/errors';
import {
  FormAddressAutocompleteAddress2Field,
  FormAddressAutocompleteCityField,
  FormAddressAutocompleteStateField,
  FormAddressAutocompleteAddress1Field,
} from 'modules/common/components/FormSections/AddressInfoFrom/Fields';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { addressFieldPath } from 'utils/address';

type AddressMapFormFieldsProps = {
  addressFieldName: string;
  control: any;
  error?: any;
  address: any;
};

const AddressMapFormFields = ({ addressFieldName, error, address }: AddressMapFormFieldsProps) => {
  const { t } = useTranslation('common');

  return (
    <Grid container spacing={2} id={addressFieldName}>
      {error && (
        <Grid item xs={12}>
          <HandlerError error={error} errors={ERRORS} />
        </Grid>
      )}

      <Grid item xs={12} md={6}>
        <FormAddressAutocompleteStateField
          required
          name={addressFieldPath('state', addressFieldName)}
          label={t('fields.address.state')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormAddressAutocompleteCityField
          required
          name={addressFieldPath('city', addressFieldName)}
          label={t('fields.address.city')}
          disabled={!address?.state?.code}
          address={{
            state: address?.state?.code || address?.state,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormAddressAutocompleteAddress1Field
          required
          name={addressFieldPath('address1', addressFieldName)}
          label={t('fields.address.address1')}
          disabled={!address?.city?.code}
          address={{
            state: address?.state?.code || address?.state,
            city: address?.city?.code || address?.city,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormAddressAutocompleteAddress2Field
          required
          name={addressFieldPath('address2', addressFieldName)}
          label={t('fields.address.address2')}
          disabled={!address?.address1?.code}
          address={{
            state: address?.state?.code || address?.state,
            city: address?.city?.code || address?.city,
            address1: address?.address1?.code || address?.address1,
          }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormTextField
          required
          name={addressFieldPath('houseNumber', addressFieldName)}
          label={t('fields.address.houseNumber')}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField name={addressFieldPath('zipCode', addressFieldName)} label={t('fields.address.zipCode')} />
      </Grid>
    </Grid>
  );
};

export default memo(AddressMapFormFields);
