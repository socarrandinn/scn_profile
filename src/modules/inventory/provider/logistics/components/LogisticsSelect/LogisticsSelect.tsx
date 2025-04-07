import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Avatar, Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';
import { LogisticIcon } from 'modules/inventory/common/components/Icons/LogisticIcon';
import { getFullUrl } from 'utils/index';
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';

type LogisticsSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
  disabled?: boolean;
};

const renderLabel = (option: ILogistics) => option.name || '';

const icon = <CheckBoxOutlineBlank fontSize='small' />;
const checkedIcon = <CheckBox fontSize='small' />;

const renderOption = (props: any, option: ILogistics, { selected }: any) => {
  return (
    <li {...props} key={option?._id}>
      <ListItemAvatar>
        <Avatar variant='rounded' alt={option?.name} src={getFullUrl(option?.avatar?.thumb as string)}>
          <LogisticIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={option?.name} />
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
    </li>
  );
};

const LogisticsSelect = ({ name, required, multiple, label, helperText, disabled, ...props }: LogisticsSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={LogisticsService.search}
      queryKey={LOGISTICS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? LogisticsService.search : LogisticsService.getOne}
      id='select-logistics'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      disabled={disabled}
    />
  );
};

export default memo(LogisticsSelect);
