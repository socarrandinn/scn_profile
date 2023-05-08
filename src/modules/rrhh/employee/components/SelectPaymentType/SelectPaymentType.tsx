import { memo } from 'react';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PaymentTypeValues } from 'modules/rrhh/employee/constants/compensation';

type PaymentTypeProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const SelectPaymentType = ({ name, required, multiple, label, placeholder, helperText }: PaymentTypeProps) => {
  const { t } = useTranslation('employee');
  const renderLabel = (option: string) => t(`fields.compensation.${option}`);
  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {t(`fields.compensation.${option}`)}
      </li>
    );
  };
  return (
    <FormSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      autoHighlight
      id='select-payment-type'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      options={PaymentTypeValues}
      helperText={helperText}
    />
  );
};

export default memo(SelectPaymentType);
