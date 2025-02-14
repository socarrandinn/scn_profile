import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IStockReductionCause } from 'modules/inventory/settings/stock-reduction-cause/interfaces';
import { STOCK_REDUCTION_CAUSES_LIST_KEY } from 'modules/inventory/settings/stock-reduction-cause/constants';
import { StockReductionCauseService } from 'modules/inventory/settings/stock-reduction-cause/services';

type StockReductionCauseSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IStockReductionCause) => option?.name || '';

const renderOption = (props: any, option: IStockReductionCause, { selected }: any) => {
  return (
    <li {...props} key={option?._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option?.name}
    </li>
  );
};

const StockReductionCauseSelect = ({
  name,
  required,
  multiple,
  label,
  helperText,
  ...props
}: StockReductionCauseSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={StockReductionCauseService.search}
      queryKey={STOCK_REDUCTION_CAUSES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      loadValue
      fetchValueFunc={multiple ? StockReductionCauseService.search : StockReductionCauseService.getOne}
      id='select-stock-reduction-cause'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(StockReductionCauseSelect);
