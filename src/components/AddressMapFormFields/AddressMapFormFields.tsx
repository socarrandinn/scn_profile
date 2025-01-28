import { FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { ERRORS } from 'constants/errors';
import FormAddressAutocompleteField from 'modules/common/components/FormSections/AddressInfoFrom/Fields/FormAddressAutocompleteField';
import { IAddress } from 'modules/common/interfaces';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { addressFieldPath } from 'utils/address';

type AddressMapFormFieldsProps = {
  addressFieldName: string;
  control: any;
  error?: any;
  address: IAddress;
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
        <FormAddressAutocompleteField
          required
          name={addressFieldPath('country', addressFieldName)}
          label={t('fields.address.country')}
          address={address}
          variant='country'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormAddressAutocompleteField
          required
          name={addressFieldPath('state', addressFieldName)}
          label={t('fields.address.state')}
          address={address}
          variant='state'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormAddressAutocompleteField
          required
          name={addressFieldPath('city', addressFieldName)}
          label={t('fields.address.city')}
          address={address}
          variant='city'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormAddressAutocompleteField
          required
          name={addressFieldPath('address1', addressFieldName)}
          label={t('fields.address.address1')}
          address={address}
          variant='address1'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormAddressAutocompleteField
          required
          name={addressFieldPath('address2', addressFieldName)}
          label={t('fields.address.address2')}
          address={address}
          variant='address2'
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormTextField
          required
          name={addressFieldPath('houseNumber', addressFieldName)}
          label={t('fields.address.houseNumber')}
        />
      </Grid>
    </Grid>
  );
};

export default memo(AddressMapFormFields);
