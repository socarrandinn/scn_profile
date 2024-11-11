import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { StockCauseService } from 'modules/inventory/product/services';
import { PRODUCTS_WAREHOUSE_STOCK_CAUSES_LIST_KEY } from 'modules/inventory/product/constants/query-keys';

type StockCauseSelectProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
  required?: boolean;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const renderLabel = (option: IWarehouse) => option.name || '';

const renderOption = (props: any, option: IWarehouse, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const isOptionEqualToValue = (option: IWarehouse | any, value: IWarehouse | any) => {
  const optionId = option?.warehouse || option?._id || option;
  const valueId = value?.warehouse || value?._id || value;
  return optionId === valueId;
};

const StockCauseSelect = ({ name, multiple, label, helperText, required = false, ...props }: StockCauseSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={StockCauseService.search}
      // fetchOption={{ filters }}
      queryKey={PRODUCTS_WAREHOUSE_STOCK_CAUSES_LIST_KEY}
      autoHighlight
      id='select-stock-cause'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
      loadValue
    />
  );
};

export default memo(StockCauseSelect);
