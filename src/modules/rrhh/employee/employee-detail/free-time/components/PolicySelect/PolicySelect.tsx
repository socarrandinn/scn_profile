import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { TimeOffPoliciesService } from 'modules/rrhh/settings/time-off-policies/services';
import { TIME_OFF_POLICIES_LIST_KEY } from 'modules/rrhh/settings/time-off-policies/constants/queries';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';

type Props = {
  dark?: boolean;
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
};

const renderLabel = (option: ITimeOffPolicies) => `${option.name}`;

const renderOption = (props: any, option: ITimeOffPolicies, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      {`${option.name}`}
    </li>
  );
};

const isOptionEqualToValue = (option: any, value: any) => {
  if ('value' in option) {
    return option?.value === value?.value;
  }
  if ('_id' in option) {
    return option?._id === value?._id;
  }
  return false;
};

const PolicySelect = ({ name, dark, label, placeholder, helperText }: Props) => {
  return (
    <FormAsyncSelectAutocompleteField
      dark={dark}
      multiple={false}
      label={label}
      placeholder={placeholder}
      disableCloseOnSelect={false}
      fetchFunc={TimeOffPoliciesService.search}
      queryKey={TIME_OFF_POLICIES_LIST_KEY}
      autoHighlight
      id='select-users'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
      name={name}
      fieldValue={'_id'}
    />
  );
};

export default PolicySelect;
