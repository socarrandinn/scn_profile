import { FormSelectAutocompleteField, useDFLForm } from '@dfl/mui-react-common';
import { COUNTRIES } from 'constants/COUNTRIES';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface ISelectProductTagsProps {
  name: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  size?: 'medium' | 'small';
  onChange?: (v: any) => void;
}

interface IOption {
  code: string;
  name: string;
}

export const isOptionEqualToValue = (option: IOption, value: IOption) => {
  const optionId = option?.code || option;
  const valueId = value?.code || value;
  return optionId === valueId;
};

const FormSelectCountryField = ({ name, label, helperText, ...props }: ISelectProductTagsProps) => {
  const { t } = useTranslation('collection');

  const { setValue } = useDFLForm();

  const options = useMemo(() => COUNTRIES, []);

  const renderLabel = useCallback(
    (option: IOption) => {
      return (
        options?.find((op) => op.code === (option?.code || option) || op.name === (option?.name || option))?.name ?? ''
      );
    },
    [options],
  );

  const renderOption = useCallback((props: any, option: IOption) => {
    return (
      <li {...props} key={option?.code}>
        {option?.name}
      </li>
    );
  }, []);

  const handleChange = useCallback(
    (value: any) => {
      setValue?.('address.address1', '');
      setValue?.('address.address2', '');
      setValue?.('address.state', '');
      setValue?.('address.city', '');
      setValue?.('address.zipCode', '');
      setValue?.('address.formattedAddress', '');
      props?.onChange?.({ target: { value: value?.toString() } });
    },
    [props, setValue],
  );

  return (
    <FormSelectAutocompleteField
      {...props}
      name={name}
      autoComplete
      includeInputInList={true}
      options={options}
      label={t(label || '')}
      isOptionEqualToValue={isOptionEqualToValue}
      helperText={helperText}
      onChange={handleChange}
      fieldValue={'code'}
      fullWidth
      id={'select-country'}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default memo(FormSelectCountryField);
