import { FormTextField, HandlerError, useDFLForm } from '@dfl/mui-react-common';
import { Divider, Grid } from '@mui/material';
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
    if (address?.geoCode) {
      const formattedAddress = [getValue(address?.geoCode, ['state', 'city', 'road', 'quarter', 'postcode'])].join(
        ', ',
      );
      if (prevAddressRef.current !== formattedAddress) {
        setValue?.(`${name}.state`, getValue(address?.geoCode, ['state']));
        setValue?.(`${name}.city`, getValue(address?.geoCode, ['city', 'town', 'village', 'city_district']));
        setValue?.(`${name}.address1`, getValue(address?.geoCode, ['road']));
        setValue?.(
          `${name}.address2`,
          getValue(address?.geoCode, ['retail', 'hamlet', 'amenity', 'neighbourhood', 'quarter', 'suburb']),
        );
        setValue?.(`${name}.houseNumber`, getValue(address?.geoCode, ['house_number']));
        setValue?.(`${name}.zipCode`, getValue(address?.geoCode, ['postcode']));
        setValue?.(`${name}.formattedAddress`, address?.geoCode?.display_name);

        prevAddressRef.current = formattedAddress;
      }
    }
  }, [address?.geoCode, name, setValue]);

  return (
    <Grid container spacing={2} id={name}>
      {error && (
        <Grid item xs={12}>
          <HandlerError error={error} errors={ERRORS} />
        </Grid>
      )}

      <Grid item xs={12}>
        <FormSelectCountryFiled name={addressFieldPath('country', name)} label={t('fields.address.country')} />
      </Grid>

      <Grid item xs={12}>
        <FormSearchLocationField
          name={addressFieldPath('geoCode', name)}
          placeholder={t('fields.address.search')}
          disabled={!address?.country}
          country={address?.country}
          value={address?.geoCode ?? address?.formattedAddress}
        />
      </Grid>

      {!!address?.formattedAddress && (
        <>
          <Grid item xs={12}>
            <Divider flexItem sx={{ my: 1 }} />
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
              name={addressFieldPath('address1', name)}
              label={t('fields.address.address1')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField
              autoComplete='off'
              required
              name={addressFieldPath('address2', name)}
              label={t('fields.address.address2.label')}
              placeholder={t('fields.address.address2.placeholder')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField
              autoComplete='off'
              name={addressFieldPath('houseNumber', name)}
              label={t('fields.address.houseNumber')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField required name={addressFieldPath('zipCode', name)} label={t('fields.address.zipCode')} />
          </Grid>
        </>
      )}
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
