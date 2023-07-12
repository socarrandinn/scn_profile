import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { TimeOffPoliciesService } from 'modules/store/employee/settings/time-off-policies/services';
import { TIME_OFF_POLICIES_LIST_KEY } from 'modules/store/employee/settings/time-off-policies/constants/queries';
import { ITimeOffPolicies } from 'modules/store/employee/settings/time-off-policies/interfaces';
import { isOptionEqualToValue } from 'utils/comparing';

type Props = {
  required?: boolean;
  multiple?: boolean;
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
const PolicySelect = ({ name, label, placeholder, helperText, multiple, required }: Props) => {
  return (
    <FormAsyncSelectAutocompleteField
        multiple={multiple}
        required={required}
        label={label}
        placeholder={placeholder}
        name={name}
        disableCloseOnSelect={multiple}
        fetchFunc={TimeOffPoliciesService.search}
        queryKey={TIME_OFF_POLICIES_LIST_KEY}
        autoHighlight
        isOptionEqualToValue={isOptionEqualToValue}
        fieldValue={'_id'}
        loadValue
        fetchValueFunc={multiple ? TimeOffPoliciesService.search : TimeOffPoliciesService.getOne}
        id={`select-policy-${name}`}
        getOptionLabel={renderLabel}
        renderOption={renderOption}
        helperText={helperText}
    />
  );
};

export default PolicySelect;
