import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { STOCK_OPERATIONS } from '../../constants/stock-operations.constants';

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

const operationText = (operation: string, t: any) => {
  return t(`operations.${operation}`);
};

const ProductOperationSelect = ({ name, required, multiple, label, helperText, ...props }: WarehouseSelectProps) => {
  const { t } = useTranslation('stock');
  const options = useMemo(() => Object.keys(STOCK_OPERATIONS), []);

  const renderLabel = (option: string) => operationText(option, t);
  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {operationText(option, t)}
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
      id='select-operations'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      disableClearable={true}
    />
  );
};

export default memo(ProductOperationSelect);
