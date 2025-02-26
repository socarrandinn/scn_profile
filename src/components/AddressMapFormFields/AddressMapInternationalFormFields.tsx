import { FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import FormSelectCountryField from 'components/fields/FormSelectCountryFiled';
import { ERRORS } from 'constants/errors';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { addressFieldPath } from 'utils/address';

type AddressMapInternationalFormFieldsProps = {
  addressFieldName: string;
  control: any;
  error?: any;
};

const AddressMapInternationalFormFields = ({
  addressFieldName: name,
  error,
}: AddressMapInternationalFormFieldsProps) => {
  const { t } = useTranslation('common');

  return (
    <Grid container spacing={2} id={name}>
      {error && (
        <Grid item xs={12}>
          <HandlerError error={error} errors={ERRORS} />
        </Grid>
      )}

      <>
        {/* <Grid item xs={12}>
          <FormSearchLocationField
            name={addressFieldPath('address1', name)}
            placeholder={t('fields.address.address1.label')}
            country={address?.country}
            value={address?.geoCode ?? address?.formattedAddress}
            required
          />
        </Grid> */}

        <Grid item xs={12}>
          <FormTextField
            autoComplete='off'
            name={addressFieldPath('address1', name)}
            label={t('fields.address.address1.label')}
            placeholder={t('fields.address.address1.placeholder')}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextField
            autoComplete='off'
            name={addressFieldPath('address2', name)}
            label={t('fields.address.address2.label')}
            placeholder={t('fields.address.address2.placeholder')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormTextField
            autoComplete='off'
            required
            name={addressFieldPath('city', name)}
            label={t('fields.address.city')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormTextField
            autoComplete='off'
            required
            name={addressFieldPath('state', name)}
            label={t('fields.address.state')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormSelectCountryField name={addressFieldPath('country', name)} label={t('fields.address.country')} />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormTextField required name={addressFieldPath('zipCode', name)} label={t('fields.address.zipCode')} />
        </Grid>
      </>
    </Grid>
  );
};

export default memo(AddressMapInternationalFormFields);
