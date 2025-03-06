import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ORDER_STATUS_VALIDATE_TYPE } from '../../constants';

interface ISelectProductTagsProps {
  name: string;
  label?: string;
  helperText?: string;
  size?: 'medium' | 'small';
  required?: boolean;
}

const FormValidateTypeSelectField = ({
  name,
  label,
  helperText,
  size = 'medium',
  required = false,
}: ISelectProductTagsProps) => {
  const { t } = useTranslation('orderStatus');

  const options = useMemo(() => Object.keys(ORDER_STATUS_VALIDATE_TYPE), []);

  const renderLabel = (option: string) => {
    return t(`validationType.${option}`);
  };

  const renderOption = (props: any, option: string) => {
    return (
      <li {...props} key={option}>
        {t(`validationType.${option}`)}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      name={name}
      required={required}
      autoComplete
      includeInputInList={true}
      options={options}
      label={label}
      isOptionEqualToValue={(option, value) => option === value}
      size={size}
      helperText={helperText}
      fullWidth
      id={'select-validation-type'}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default memo(FormValidateTypeSelectField);
