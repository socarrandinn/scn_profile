import { memo, useMemo } from 'react';
import { CAUSE_TYPE } from '../../interfaces/IStock';
import { useTranslation } from 'react-i18next';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';

type WarehouseSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

export const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option;
  const valueId = value;
  return optionId === valueId;
};

const SelectDecreaseCauseType = ({ name, required, multiple, label, helperText, ...props }: WarehouseSelectProps) => {
  const options = useMemo(() => Object.keys(CAUSE_TYPE), []);
  const { t } = useTranslation('product');
  const renderLabel = (option: string) => t(`cause.${option}`);

  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {t(`cause.${option}`)}
      </li>
    );
  };
  return (
    <FormSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      options={options}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id='select-causes'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      disableClearable={true}
    />
  );
};

export default memo(SelectDecreaseCauseType);
