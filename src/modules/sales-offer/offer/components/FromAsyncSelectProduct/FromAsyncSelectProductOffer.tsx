import { memo, useCallback, useMemo } from 'react';
import { Avatar, Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FetchOption, FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { ProductService } from 'modules/inventory/product/services';
import { OFFERS_PRODUCTS_RULE_LIST_KEY } from '../../constants';
import { IProduct } from 'modules/inventory/common/interfaces';
import { getFullUrl } from 'utils/index';

type FromAsyncSelectProductProps = {
  name: string;
  placeholder?: string;
  helperText?: string;
  fetchOption?: FetchOption;
  label?: string;
  control?: any,
  multiple?: boolean;
  disabled?: boolean;
  setValue: any;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};

const FromAsyncSelectProductOffer = ({
  name,
  multiple,
  disabled = false,
  label,
  control,
  helperText,
  setValue,
  ...props
}: FromAsyncSelectProductProps) => {
  const filters = useMemo(
    () =>
      new OperatorFilter({
        type: 'OR',
        filters: [
          new TermFilter({
            field: 'enable',
            value: true,
          }),
          new TermFilter({
            field: 'visible',
            value: true,
          }),
        ],
      }).toQuery(),
    [],
  );

  const handleChange = useCallback((event: any) => {
    const { value } = event.target;
    setValue?.(`${name}`, value);
  }, [setValue, name]);

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      disabled={disabled}
      name={name}
      fetchOption={{ filters }}
      fetchFunc={ProductService.search}
      fetchValueFunc={ProductService.search}
      loadValue
      disableCloseOnSelect={multiple}
      label={label}
      queryKey={OFFERS_PRODUCTS_RULE_LIST_KEY}
      helperText={helperText}
      autoHighlight
      id={`multiple-${name}`}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option: IProduct) => option?.name || ''}
      renderOption={(props, option: IProduct, { selected }) => (
        <li {...props} key={option?._id}>
          <ListItemAvatar>
            <Avatar variant='rounded' alt={option?.name} src={getFullUrl(option?.media?.[0]?.thumb as string)}>
              P
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={option?.name} />
          <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
        </li>
      )}
    />
  );
};

export default memo(FromAsyncSelectProductOffer);
