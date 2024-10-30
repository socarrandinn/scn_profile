import React, { FC, memo, useCallback, useEffect, useMemo } from 'react';
import { Grid, GridProps } from '@mui/material';
import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { IAddress } from 'modules/common/interfaces';
// import { EMPTY_ADDRESS } from 'modules/common/constants';
import { useTranslation } from 'react-i18next';
import { useGoogleMapAddress } from 'contexts/GoogleMapAddressProvider';
import { addressFieldPath, extractPlaceDetails } from 'utils/address';
import { FormLabel, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { ERRORS } from 'constants/errors';
import { FormGoogleAddressAutocompleteField } from 'components/GoogleAddressAutocomplete';
import merge from 'lodash/merge';
import pick from 'lodash/pick';
import FormProvinceSelect from 'modules/common/components/Address/ProvinceSelect';
import FormMunicipalitySelect from 'modules/common/components/Address/MunicipalitySelect';

type Props = {
  addressFieldName?: string;
  setValue?: UseFormSetValue<any>;
  watch?: UseFormWatch<any>;
  control?: Control<any, any>;
  error?: any;
  value?: IAddress;
} & GridProps;

const AddressFormFields: FC<Props> = ({
  setValue,
  addressFieldName,
  control,
  error,
  value,
  watch,
  ...rest
}) => {
  const { t } = useTranslation('common');

  const { currentAddress, setCurrentAddress, setShowMap } = useGoogleMapAddress();

  const watchedAddress = addressFieldName ? watch?.(addressFieldName) : watch?.();

  const state = watchedAddress?.state;

  const isAddressCompletedNoLocation = useMemo(
    () =>
      !!watchedAddress?.street &&
      !!watchedAddress?.number &&
      !!watchedAddress?.state &&
      !!watchedAddress?.city &&
      !!watchedAddress?.zipCode &&
      !!watchedAddress?.country &&
      !watchedAddress.location?.coordinates?.length,
    [
      watchedAddress?.city,
      watchedAddress?.country,
      watchedAddress?.location?.coordinates?.length,
      watchedAddress?.number,
      watchedAddress?.state,
      watchedAddress?.street,
      watchedAddress?.zipCode,
    ],
  );

  useEffect(() => {
    setShowMap?.(isAddressCompletedNoLocation);
  }, [isAddressCompletedNoLocation, setShowMap, watchedAddress]);

  useEffect(() => {
    setCurrentAddress?.(value ?? null);
  }, [value, setCurrentAddress]);

  useEffect(() => {
    if (currentAddress) {
      if (addressFieldName) {
        setValue?.(addressFieldName, currentAddress);
      } else {
        setValue?.('street', currentAddress?.street);
        setValue?.('number', currentAddress?.number);
        setValue?.('city', currentAddress?.city);
        setValue?.('state', currentAddress?.state);
        setValue?.('zipCode', currentAddress?.zipCode);
        setValue?.('country', currentAddress?.country);
        setValue?.('location', currentAddress?.location);
      }
    }
  }, [addressFieldName, setValue, currentAddress]);

  const onChangePlace = useCallback(
    (place: google.maps.places.PlaceResult, fields?: string[]) => {
      const locationDetails = extractPlaceDetails(place);
      if (!fields?.length) {
        setCurrentAddress?.(locationDetails);
        if (addressFieldName) {
          setValue?.(addressFieldName, locationDetails);
        }
      } else {
        const finalAddress = merge(currentAddress, pick(locationDetails, fields));
        setCurrentAddress?.(finalAddress);
        if (addressFieldName) {
          setValue?.(addressFieldName, locationDetails);
        }
      }
    },
    [addressFieldName, currentAddress, setCurrentAddress, setValue],
  );

  return (
    <Grid container spacing={2} id={addressFieldName} {...rest}>
      {error && (
        <Grid item xs={12}>
          <HandlerError error={error} errors={ERRORS} />
        </Grid>
      )}
      <Grid item xs={12} md={6}>
        {/* @ts-ignore */}
        <FormGoogleAddressAutocompleteField
          {...rest}
          required
          name={addressFieldPath('street', addressFieldName)}
          label={t('fields.address.street')}
          control={control}
          onChangePlace={(place) => {
            onChangePlace(place);
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* @ts-ignore */}
        <FormGoogleAddressAutocompleteField
          {...rest}
          required
          name={addressFieldPath('number', addressFieldName)}
          label={t('fields.address.number')}
          control={control}
          onChangePlace={(place) => {
            onChangePlace(place);
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormLabel>
          {t('fields.address.state')}
        </FormLabel>
        <FormProvinceSelect
          {...rest}
          required
          control={control}
          name={addressFieldPath('state', addressFieldName)}
          region={'administrative_area_level_1'}
          onChangePlace={(place: any) => {
            onChangePlace(place, ['state', 'country']);
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormLabel>
          {t('fields.address.city')}
        </FormLabel>
        <FormMunicipalitySelect
          {...rest}
          required
          state={state}
          name={addressFieldPath('city', addressFieldName)}
          helperText={!state && t('provinceFirst')}
          control={control}
          region={'administrative_area_level_2'}
          onChangePlace={(place: any) => {
            onChangePlace(place, ['city', 'state', 'country']);
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* @ts-ignore */}
        <FormGoogleAddressAutocompleteField
          {...rest}
          required
          name={addressFieldPath('zipCode', addressFieldName)}
          label={t('fields.address.zipCode')}
          control={control}
          region={'postal_code'}
          onChangePlace={(place) => {
            onChangePlace(place, ['zipCode', 'city', 'state', 'country']);
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* @ts-ignore */}
        <FormGoogleAddressAutocompleteField
          {...rest}
          required
          name={addressFieldPath('country', addressFieldName)}
          label={t('fields.address.country')}
          control={control}
          region={'country'}
          onChangePlace={(place) => {
            onChangePlace(place, ['country']);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormTextField
          name={addressFieldPath('notes', addressFieldName)}
          label={t('fields.address.notes')}
          control={control}
          multiline
          rows={4}
        />
      </Grid>
    </Grid>
  );
};

export default memo(AddressFormFields);
