import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { LOGISTICS_LIST_KEY } from '../../constants';
import { AvatarMedia } from 'components/AvatarMedia';

type SelectLogisticsProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const renderLabel = (option: ILogistics) => option.name || '';

/* const renderOption = (props: any, option: ILogistics, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
}; */

const renderOption = (props: any, option: ILogistics, { selected }: any) => {
  return (
    <li {...props} key={option._id}>
      <ListItemAvatar>
        <AvatarMedia name={option.name} avatar={option.avatar} />
      </ListItemAvatar>

      <ListItemText primary={option.name} />
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
    </li>
  );
};

const isOptionEqualToValue = (option: ILogistics | any, value: ILogistics | any) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};

const SelectLogistics = ({ name, multiple, label, placeholder, helperText }: SelectLogisticsProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      label={label}
      placeholder={placeholder}
      name={name}
      loadValue
      disableCloseOnSelect={multiple}
      fetchFunc={LogisticsService.search}
      queryKey={LOGISTICS_LIST_KEY}
      autoHighlight
      id='select-logistics'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default memo(SelectLogistics);
