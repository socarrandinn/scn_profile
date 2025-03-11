import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
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
  disabled?: boolean;
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

const FormSelectCountry = ({ name, label, helperText, ...props }: ISelectProductTagsProps) => {
  const { t } = useTranslation('collection');
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
      fieldValue={'code'}
      fullWidth
      id={'select-country'}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default memo(FormSelectCountry);
