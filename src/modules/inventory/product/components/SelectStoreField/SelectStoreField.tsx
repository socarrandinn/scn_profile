import { memo, useCallback } from 'react';
import { FetchOption, FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { LongText } from 'modules/inventory/product/components/LongText';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { isOptionEqualToValue } from 'utils/comparing';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';

interface ISelectStoreField {
  name: string;
  withNational?: boolean;
  label?: string;
  placeholder: string;
  fetchOption?: FetchOption;
  multiple?: boolean;
}

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const SelectStoreField = ({ name, label, withNational, multiple = false, ...rest }: ISelectStoreField) => {
  const addNationalOption = useCallback(
    (options: IWarehouse[]) => {
      if (withNational) return [{ _id: null, name: 'Nacional' }, ...options];
      return options;
    },
    [withNational],
  );

  return (
    <FormAsyncSelectAutocompleteField
      {...rest}
      name={name}
      id={`multiple-${name}`}
      label={label || ''}
      autoComplete
      multiple={multiple}
      includeInputInList={true}
      disableCloseOnSelect={multiple}
      fetchFunc={WarehouseService.search}
      fetchValueFunc={multiple ? WarehouseService.search : WarehouseService.getOne}
      loadValue
      queryKey={'warehouses'}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option: any) => option?.name || ''}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
          <LongText lineClamp={1} maxCharacters={30} text={option?.name} />
        </li>
      )}
      freeSolo
      filterSelectedOptions={!multiple}
      mapOptions={addNationalOption}
    />
  );
};

export default memo(SelectStoreField);
