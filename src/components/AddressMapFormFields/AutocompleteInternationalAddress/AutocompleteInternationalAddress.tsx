/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { UseFormClearErrors } from 'react-hook-form';
import { FormFieldControl, FormFieldControlProps, TextField, useDFLForm } from '@dfl/mui-react-common';
import { Autocomplete, Box, debounce, Grid, Typography } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useFindGeoPlaces from 'components/AddressMapFormFields/hooks/useFindGeoPlaces';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

const loadScript = (src: string, position: HTMLElement | null, id: string) => {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
};

const autocompleteService = { current: null };

interface MainTextMatchedSubstrings {
  offset: number;
  length: number;
}

interface StructuredFormatting {
  main_text: string;
  secondary_text: string;
  main_text_matched_substrings?: readonly MainTextMatchedSubstrings[];
}

interface PlaceType {
  description: string;
  structured_formatting: StructuredFormatting;
}

type Props = {
  name: string;
  onChange?: (address: any) => void;
  clearErrors: UseFormClearErrors<any>;
  required?: boolean;
  label?: string;
  helperText?: string;
  placeholder?: string;
  edit: boolean;
  setEdit: (edit: boolean) => void;
  error?: boolean;
};

const AutocompleteInternationalAddress = ({
  name,
  edit,
  setEdit,
  onChange,
  clearErrors,
  required,
  label,
  helperText,
  ...props
}: Props) => {
  const { setValue: setValueForm, watch } = useDFLForm();

  const address = watch?.(name);

  // const [edit, setEdit] = useState<boolean>(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string>('');
  const [value, setValue] = useState<PlaceType | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<readonly PlaceType[]>([]);
  const loaded = useRef(false);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps-international')) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector('head'),
        'google-maps-international',
      );
    }

    loaded.current = true;
  }

  const { data, isLoading } = useFindGeoPlaces(selectedPlaceId);

  const extractAddressComponents = useCallback((addressComponents: any[]) => {
    const address = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
      location: {
        coordinates: [0, 0],
      },
    };

    addressComponents.forEach((component: any) => {
      if (component?.types?.includes('street_number')) {
        address.address1 = component?.longText;
      } else if (component?.types?.includes('route')) {
        address.address1 += ` ${component?.longText as string}`.trim();
      } else if (component?.types?.includes('subpremise')) {
        address.address2 = component?.longText;
      } else if (component?.types?.includes('locality')) {
        address.city = component?.longText;
      } else if (component?.types?.includes('administrative_area_level_1')) {
        address.state = component?.longText;
      } else if (component?.types?.includes('country')) {
        address.country = component?.shortText;
      } else if (component?.types?.includes('postal_code')) {
        address.zipCode = component?.longText;
      }
    });

    return address;
  }, []);

  useEffect(() => {
    if (selectedPlaceId && data && !isLoading) {
      const address = extractAddressComponents(data?.addressComponents);
      const formattedAddress = data?.formattedAddress;
      const coordinates = [data?.location?.longitude, data?.location?.latitude];

      setValueForm?.(`${name}.address1`, address.address1);
      setValueForm?.(`${name}.address2`, address.address2);
      setValueForm?.(`${name}.city`, address.city);
      setValueForm?.(`${name}.state`, address.state);
      setValueForm?.(`${name}.country`, address.country);
      setValueForm?.(`${name}.zipCode`, address.zipCode);
      setValueForm?.(`${name}.location.coordinates`, coordinates);
      setValueForm?.(`${name}.formattedAddress`, formattedAddress);

      if (address?.address1) {
        clearErrors(`${name}.address1`);
      }
      if (address?.city) {
        clearErrors(`${name}.city`);
      }
      if (address?.state) {
        clearErrors(`${name}.state`);
      }
      if (address?.zipCode) {
        clearErrors(`${name}.zipCode`);
      }
      if (address?.location) {
        clearErrors(`${name}.location`);
      }
    }
  }, [name, setValueForm, selectedPlaceId, data, isLoading, extractAddressComponents, clearErrors]);

  const fetch = useMemo(
    () =>
      debounce((request: { input: string }, callback: (results?: readonly PlaceType[]) => void) => {
        (autocompleteService.current as any).getPlacePredictions(request, callback);
      }, 400),
    [],
  );

  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && (window as any).google) {
      autocompleteService.current = new (window as any).google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results?: readonly PlaceType[]) => {
      if (active) {
        let newOptions: readonly PlaceType[] = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <div className='w-full'>
      <Autocomplete
        // @ts-ignore
        name={`${name}.address1`}
        {...props}
        id='google-maps-international'
        sx={{ width: '100%' }}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
        filterOptions={(x) => x}
        options={options}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={value}
        noOptionsText='No locations'
        onChange={(event: any, newValue: PlaceType | null) => {
          setEdit(false);
          setOptions(newValue ? [newValue, ...options] : options);
          setValue(newValue);
          // @ts-ignore
          setSelectedPlaceId(newValue?.place_id || '');
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          setEdit(true);
        }}
        renderInput={(params) => {
          // @ts-ignore
          const val = params?.inputProps?.value?.split(', ');
          if ((selectedPlaceId || val?.[0] || address?.address1) && !edit) {
            return (
              <TextField
                error={props?.error}
                {...params}
                inputProps={{
                  ...params?.inputProps,
                  value: val?.[0] || address?.address1 || '',
                }}
                label={label}
                fullWidth
              />
            );
          }

          return <TextField error={props?.error} {...params} label={label} fullWidth />;
        }}
        renderOption={(props, option) => {
          // eslint-disable-next-line react/prop-types
          const { key, ...optionProps } = props;
          const matches = option.structured_formatting.main_text_matched_substrings || [];

          const parts = parse(
            option.structured_formatting.main_text,
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            matches.map((match: any) => [match.offset, match?.offset + match?.length]),
          );
          return (
            <li key={key} {...optionProps}>
              <Grid container sx={{ alignItems: 'center' }}>
                <Grid item sx={{ display: 'flex', width: 44 }}>
                  <LocationOnIcon sx={{ color: 'text.secondary' }} />
                </Grid>
                <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                  {parts.map((part, index) => (
                    <Box key={index} component='span' sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}>
                      {part.text}
                    </Box>
                  ))}
                  <Typography variant='body2' color='text.secondary'>
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
      />
    </div>
  );
};

const FormInternationalAddressAutocompleteField = (props: FormFieldControlProps & Props) => {
  return <FormFieldControl {...props} Component={AutocompleteInternationalAddress} />;
};

export default memo(FormInternationalAddressAutocompleteField);
