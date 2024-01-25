import { memo, useCallback } from 'react';
import { FetchOption, FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { LongText } from 'modules/inventory/product/components/LongText';
import { IStore } from 'modules/inventory/store/interfaces';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { SupplierService } from 'modules/inventory/provider/supplier/services';
// import { StoreService } from 'modules/inventory/store/services';

interface ISelectProducts {
  name: string;
  withNational?: boolean;
  label?: string;
  placeholder: string;
  fetchOption?: FetchOption;
  multiple?: boolean;
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const isOptionEqualToValue = (option: any, value: any | string) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};

const SelectStoreField = ({ name, label, placeholder, withNational, multiple = false, ...rest }: ISelectProducts) => {
  const addNationalOption = useCallback(
    (options: IStore[]) => {
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
      fetchFunc={SupplierService.search}
      fetchValueFunc={multiple ? SupplierService.search : SupplierService.getOne}
      loadValue
      queryKey={'stores'}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option: any) => option?.name || ''}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
         <LongText lineClamp={1} maxCharacters={30} text={option?.name} />
        </li>
      )}
      freeSolo
      filterSelectedOptions={!multiple}
      placeholder={placeholder || ''}
      mapOptions={addNationalOption}
    />
  );
};

export default memo(SelectStoreField);
