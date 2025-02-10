import { FormTextField, HandlerError, useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { FormSearchLocationField } from 'components/fields/FormSearchLocationField';
import FormSelectCountryFiled from 'components/fields/FormSelectCountryFiled';
import { ERRORS } from 'constants/errors';
import { IGeocode } from 'modules/common/interfaces';
import { memo, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { addressFieldPath } from 'utils/address';

type AddressMapInternationalFormFieldsProps = {
  addressFieldName: string;
  control: any;
  error?: any;
  address: any;
};

const AddressMapInternationalFormFields = ({
  addressFieldName: name,
  error,
  address,
}: AddressMapInternationalFormFieldsProps) => {
  const { t } = useTranslation('common');
  const { setValue } = useDFLForm();
  const prevAddressRef = useRef<string | null>(null);

  useEffect(() => {
    if (address?.address1) {
      const formattedAddress = [getValue(address?.address1, ['state', 'city', 'road', 'quarter', 'postcode'])].join(
        ', ',
      );
      if (prevAddressRef.current !== formattedAddress) {
        setValue?.(`${name}.state`, getValue(address?.address1, ['state']));
        setValue?.(`${name}.city`, getValue(address?.address1, ['city', 'town', 'village', 'city_district']));
        setValue?.(`${name}.country`, getValue(address?.address1, ['country_code'])?.toUpperCase());
        setValue?.(
          `${name}.address2`,
          getValue(address?.address1, ['retail', 'hamlet', 'amenity', 'neighbourhood', 'quarter', 'suburb']),
        );
        setValue?.(`${name}.zipCode`, getValue(address?.address1, ['postcode']));
        setValue?.(`${name}.formattedAddress`, address?.address1?.display_name);

        prevAddressRef.current = formattedAddress;
      }
    }
  }, [address?.address1, name, setValue]);

  return (
    <Grid container spacing={2} id={name}>
      {error && (
        <Grid item xs={12}>
          <HandlerError error={error} errors={ERRORS} />
        </Grid>
      )}

      <>
        <Grid item xs={12}>
          <FormSearchLocationField
            name={addressFieldPath('address1', name)}
            placeholder={t('fields.address.address1.label')}
            country={address?.country}
            value={address?.geoCode ?? address?.formattedAddress}
            required
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
          <FormTextField required name={addressFieldPath('zipCode', name)} label={t('fields.address.zipCode')} />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormSelectCountryFiled name={addressFieldPath('country', name)} label={t('fields.address.country')} />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <FormTextField
            autoComplete='off'
            required
            name={addressFieldPath('address1', name)}
            label={t('fields.address.address1')}
          />
        </Grid> */}

        {/*  <Grid item xs={12} md={6}>
          <FormTextField
            autoComplete='off'
            name={addressFieldPath('houseNumber', name)}
            label={t('fields.address.houseNumber')}
          />
        </Grid> */}
      </>
    </Grid>
  );
};

export default memo(AddressMapInternationalFormFields);

const getValue = (location: IGeocode, keys: Array<keyof IGeocode['address']>) => {
  return keys
    ?.map((key) => location?.address?.[key])
    ?.filter(Boolean)
    ?.join(', ');
};
