import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { COUNTRIES } from 'constants/COUNTRIES';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface ISelectProductTagsProps {
  name: string;
  label?: string;
  helperText?: string;
  size?: 'medium' | 'small';
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

const FormSelectCountryFiled = ({ name, label, helperText, size = 'medium' }: ISelectProductTagsProps) => {
  const { t } = useTranslation('collection');

  const options = useMemo(() => COUNTRIES, []);

  const renderLabel = (option: IOption) => {
    return options?.find((op) => op.code === (option?.code || option))?.name ?? '';
  };

  const renderOption = (props: any, option: IOption) => {
    return (
      <li {...props} key={option}>
        {option?.name}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      name={name}
      autoComplete
      includeInputInList={true}
      options={options}
      label={t(label || '')}
      isOptionEqualToValue={isOptionEqualToValue}
      size={size}
      helperText={helperText}
      fieldValue={'code'}
      fullWidth
      id={'select-country'}
      key={'country'}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default memo(FormSelectCountryFiled);
