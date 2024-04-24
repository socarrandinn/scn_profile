import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { LocationOn } from '@mui/icons-material';
import parse from 'autosuggest-highlight/parse';
import {
  Autocomplete,
  AutocompleteProps,
  Box,
  debounce,
  Grid,
  styled,
  TextFieldProps,
  Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import { useGoogleMapAddress } from 'contexts/GoogleMapAddressProvider';
import {
  FormFieldControl,
  FormFieldControlProps,
  FormLabel,
  SelectAutocompleteFieldProps,
  TextField,
  useFormLabel,
} from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { styledField } from 'components/styledField';
import omit from 'lodash/omit';

type Props = Omit<AutocompleteProps<any, any, any, any>, 'renderInput' | 'onChange' | 'options'> & {
  helperText?: string;
  error?: boolean;
  loading?: boolean;
  required?: boolean;
  label?: string;
  placeholder?: string;
  searchProps?: TextFieldProps;
  inputProps?: any;
  onChange?: any;
  fieldValue?: string;
  dark?: boolean;
  inputRef?: any;
  renderInput?: (_params: AutocompleteRenderInputParams) => ReactNode;
} & Omit<AutocompleteProps<any, any, any, any>, 'options'> & {
  initialValue?: string;
  onChangePlace: (_place: google.maps.places.PlaceResult) => void;
  dark?: boolean;
  region?:
  | 'locality'
  | 'sublocality'
  | 'postal_code'
  | 'country'
  | 'administrative_area_level_1'
  | 'administrative_area_level_2'
  | 'administrative_area_level_3';
};

const WrapperAutocomplete = ({
  dark,
  ...props
}: AutocompleteProps<any, any, any, any> & {
  dark?: boolean;
}) => <Autocomplete {...props} />;

const AutocompleteDarkField = styled(WrapperAutocomplete)<SelectAutocompleteFieldProps>(styledField);

const GoogleAddressAutocomplete = ({
  label,
  helperText,
  error,
  inputRef,
  placeholder,
  searchProps,
  inputProps,
  loading,
  required,
  renderInput,
  readOnly,
  onChange,
  fieldValue,
  disabled,
  dark,
  onChangePlace,
  region,
  ...rest
}: Props) => {
  const [value, setValue] = useState<google.maps.places.PlaceResult | null>(null);
  const [inputValue, setInputValue] = useState(rest?.value);
  const [options, setOptions] = useState<readonly google.maps.places.PlaceResult[]>([]);
  const { createMarker, apiLoader, autoCompleteService, placesService } = useGoogleMapAddress();

  const { label: inputLabel, formLabel } = useFormLabel(label, dark);

  const input =
    renderInput ||
    ((params) => {
      return (
        <TextField
          {...params}
          label={inputLabel}
          {...searchProps}
          helperText={helperText}
          placeholder={placeholder}
          InputProps={{
            ...inputProps,
            ...params.InputProps,
            autoComplete: 'disabled', // disable autocomplete and autofill
            endAdornment: (
              <>
                {loading ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
          error={error}
          onChange={onChange}
        />
      );
    });

  const readOnlyValue = readOnly || inputProps?.readOnly;

  useEffect(() => {
    setInputValue(rest?.value);
  }, [rest?.value]);

  const { t } = useTranslation('common');

  const fetch = useMemo(
    () =>
      debounce(
        (
          request: google.maps.places.AutocompletionRequest,
          callback: (
            _predictions: google.maps.places.AutocompletePrediction[] | null,
            _status: google.maps.places.PlacesServiceStatus,
          ) => void,
        ) => {
          autoCompleteService?.getPlacePredictions(request, callback);
        },
        500,
      ),
    [inputValue],
  );

  useEffect(() => {
    let active = apiLoader?.isLoaded;
    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch(
      { input: inputValue, region },
      (
        predictions: google.maps.places.AutocompletePrediction[] | null,
        _status: google.maps.places.PlacesServiceStatus,
      ) => {
        if (active) {
          let newOptions: readonly google.maps.places.PlaceResult[] = [];

          if (value) {
            newOptions = [value];
          }

          if (predictions) {
            newOptions = [...newOptions, ...predictions];
          }

          setOptions(newOptions);
        }
      },
    );

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch, region, apiLoader?.isLoaded]);

  return (
    <FormLabel label={formLabel} required={required}>
      <AutocompleteDarkField
        getOptionLabel={(option: string | Record<string, any>) =>
          typeof option === 'string' ? option : option.description
        }
        filterOptions={(x: any) => x}
        renderInput={input}
        autoComplete
        freeSolo
        inputValue={inputValue}
        value={value}
        includeInputInList
        filterSelectedOptions
        noOptionsText={t('messages.noLocations')}
        onChange={(_event: any, newValue: google.maps.places.PlaceResult, reason: string) => {
          setOptions(newValue ? [newValue, ...options] : options);
          if (newValue && placesService && reason === 'selectOption') {
            placesService?.getDetails(
              {
                placeId: newValue.place_id as string,
                fields: ['formatted_address', 'place_id', 'geometry', 'address_components'],
              },
              (place: google.maps.places.PlaceResult | null, status: google.maps.places.PlacesServiceStatus) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && !!place?.geometry?.location) {
                  if (place) {
                    createMarker?.(place?.geometry?.location);
                    onChangePlace(place);
                  }
                }
              },
            );
          }
          setValue(newValue);
        }}
        onInputChange={(event: any, newInputValue: any) => {
          setInputValue(newInputValue);
        }}
        fullWidth
        disabled={disabled}
        loading={loading}
        dark={dark}
        readOnly={readOnlyValue}
        {...omit(rest, 'value')}
        options={options}
        renderOption={(props: any, option: any) => {
          const matches: Array<Record<string, number>> =
            option.structured_formatting.main_text_matched_substrings || [];

          const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match: Record<string, number>) => [match.offset, match.offset + match.length]),
          );

          return (
            <li {...props} key={option?.place_id}>
              <Grid container alignItems='center'>
                <Grid item sx={{ display: 'flex', width: 44 }}>
                  <LocationOn sx={{ color: 'text.secondary' }} />
                </Grid>
                <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                  {parts.map((part: any, index: number) => (
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
    </FormLabel>
  );
};

const FormGoogleAddressAutocompleteField = (props: FormFieldControlProps & Props) => {
  return <FormFieldControl {...props} Component={GoogleAddressAutocomplete} />;
};

export { GoogleAddressAutocomplete, FormGoogleAddressAutocompleteField };
