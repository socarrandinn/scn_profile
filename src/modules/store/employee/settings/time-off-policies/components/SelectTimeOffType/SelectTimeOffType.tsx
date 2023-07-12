import React, { memo } from 'react';
import { Checkbox, ListItemText } from '@mui/material';
import { TimeOffPolicyTypesService } from 'modules/store/employee/settings/time-off-policies/services';
import { TIME_OFF_POLICY_TYPES_LIST_KEY } from 'modules/store/employee/settings/time-off-policies/constants/queries';
import { isOptionEqualToValue } from 'utils/comparing';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CircleIcon from '@mui/icons-material/Circle';
import { ITimeOffPolicyType } from 'modules/store/employee/settings/time-off-policies/interfaces';

type SelectTimeOffTypeProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: ITimeOffPolicyType) => option?.name || '';

const renderOption = (props: any, option: ITimeOffPolicyType, { selected }: any) => {
  return (
    <li {...props} key={option._id}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      <ListItemAvatar sx={{ minWidth: '20px' }}>
        <CircleIcon sx={{ color: option?.color, fontSize: '10px' }} />
      </ListItemAvatar>
      <ListItemText primary={option?.name} />
    </li>
  );
};

const SelectTimeOffType = ({ name, required, multiple, label, placeholder, helperText }: SelectTimeOffTypeProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      isOptionEqualToValue={isOptionEqualToValue}
      disableCloseOnSelect={multiple}
      fetchFunc={TimeOffPolicyTypesService.search}
      queryKey={TIME_OFF_POLICY_TYPES_LIST_KEY}
      autoHighlight
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? TimeOffPolicyTypesService.search : TimeOffPolicyTypesService.getOne}
      id='select-time-off-type'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(SelectTimeOffType);
