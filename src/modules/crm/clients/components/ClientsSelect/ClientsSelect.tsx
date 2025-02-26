import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox, ListItemText } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IClients } from 'modules/crm/clients/interfaces';
import { CLIENTS_LIST_KEY } from 'modules/crm/clients/constants';
import { ClientsService } from 'modules/crm/clients/services';

type ClientsSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
  disabled?: boolean;
};

const renderLabel = (option: IClients) => option?.fullName || '';

const renderOption = (props: any, option: IClients, { selected }: any) => {
  return (
    <li {...props} key={option?._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      <ListItemText primary={option?.fullName} secondary={option?.email} />
    </li>
  );
};

const ClientsSelect = ({
  name,
  required,
  multiple,
  label,
  helperText,
  disabled = false,
  ...props
}: ClientsSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      disabled={disabled}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={ClientsService.search}
      queryKey={CLIENTS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      // fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? ClientsService.search : ClientsService.getOne}
      id='select-clients'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(ClientsSelect);
