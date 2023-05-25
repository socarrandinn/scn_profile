import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo } from 'react';
import { ITag } from 'modules/rrhh/team/interfaces/ITag';
import { TeamService } from 'modules/rrhh/team/services';
import { TEAMS_TAGS_LIST_KEY } from 'modules/rrhh/team/constants';

type Props = {
  name: string;
  required?: boolean;
  label?: string;
  defaultValues?: string[];
};

const renderLabel = (option: ITag | string) => (typeof option === 'string' ? option : option?.name);

const renderOption = (props: any, option: ITag, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      {option?.name}
    </li>
  );
};

const isOptionEqualToValue = (option: ITag | any, value: ITag | any) => {
  if ('value' in option) {
    return option?.value === value?.value;
  }
  if ('_id' in option) {
    return option?._id === value?._id;
  }
  return false;
};

const TeamTagsSelect = ({ name, label, required, defaultValues }: Props) => {
  return (
    <FormAsyncSelectAutocompleteField
      name={name}
      label={label}
      required={required}
      freeSolo={true}
      multiple={true}
      disableCloseOnSelect={true}
      fetchFunc={TeamService.searchTags}
      queryKey={TEAMS_TAGS_LIST_KEY}
      autoHighlight
      id='select-team-tags'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default memo(TeamTagsSelect);
