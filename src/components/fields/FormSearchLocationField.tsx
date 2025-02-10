import * as React from 'react';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { debounce } from '@mui/material/utils';
import { LeafletService } from 'modules/common/service';
import { useTranslation } from 'react-i18next';
import { IGeocode } from 'modules/common/interfaces';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';

type Props = {
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value: IGeocode | null;
  name: string;
  country: any;
};

export const FormSearchLocationField = ({ placeholder, disabled, required, country, name, value }: Props) => {
  const { t } = useTranslation('common');
  const [inputValue, setInputValue] = React.useState(value?.display_name || (value as unknown as string) || '');
  const [options, setOptions] = React.useState<readonly IGeocode[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const _COUNTRY = React.useMemo(() => country?.code || country, [country]);

  const fetch = React.useMemo(
    () =>
      debounce(async (request: { input: string }, callback: (results?: readonly IGeocode[]) => void) => {
        try {
          const data = await LeafletService.searchLocation(request.input, _COUNTRY);

          if (data) {
            callback(data);
          }
        } catch (error) {
          console.error('Error fetching addresses:', error);

          // eslint-disable-next-line n/no-callback-literal
          callback([]);
        }
      }, 400),
    [_COUNTRY],
  );

  React.useEffect(() => {
    let active = true;

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }
    setIsLoading(true);
    fetch({ input: inputValue }, (results?: readonly IGeocode[]) => {
      if (active) {
        let newOptions: readonly IGeocode[] = [];
        if (value) {
          newOptions = [value];
        }
        if (results) {
          newOptions = [...newOptions, ...results];
        }
        setIsLoading(false);
        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch, setIsLoading]);

  const getSecondaryText = (option: IGeocode) => {
    const address = option.address;
    return [address?.city || address?.town || address?.village, address?.state, address?.country]
      .filter(Boolean)
      .join(', ');
  };

  return (
    <FormSelectAutocompleteField
      loading={isLoading}
      loadingText={t('common:loading')}
      disableClearable={true}
      required={required}
      name={name}
      disabled={disabled}
      fullWidth
      options={options}
      filterOptions={(x) => x}
      autoComplete
      includeInputInList
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.display_name)}
      filterSelectedOptions
      noOptionsText={t('messages.addressNotFound')}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      // @ts-ignore
      inputProps={{
        onValueChange: (event: any, newValue: IGeocode | null) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setIsLoading(false);
        },
      }}
      renderInput={(params) => (
        <TextField
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
            }
          }}
          {...params}
          placeholder={placeholder}
          fullWidth
        />
      )}
      renderOption={(props, option) => {
        // eslint-disable-next-line react/prop-types
        const { key, ...optionProps } = props;

        if (!option?.lat || !option?.lon) return null;

        return (
          <li key={key} {...optionProps}>
            <Grid container alignItems='center'>
              <Grid item sx={{ display: 'flex', width: 44 }}>
                <LocationOnIcon sx={{ color: 'text.secondary' }} />
              </Grid>
              <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                <Typography variant='body1'>{(option?.display_name ?? value)?.split(', ')[0]}</Typography>
                <Typography variant='body2' color='text.secondary'>
                  {getSecondaryText(option)}
                </Typography>
                <Typography variant='caption' color='text.secondary'>
                  Lat: {option.lat}, Lng: {option.lon}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
};
