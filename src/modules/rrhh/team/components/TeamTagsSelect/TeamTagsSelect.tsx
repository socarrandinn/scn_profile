import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo } from 'react';
import { TeamService } from 'modules/rrhh/team/services';
import { TEAMS_TAGS_LIST_KEY } from 'modules/rrhh/team/constants';

type Props = {
  name: string;
  required?: boolean;
  label?: string;
  defaultValues?: string[];
};

const renderLabel = (option: string) => option;

const renderOption = (props: any, option: string, { selected }: any) => {
  return (
    <li {...props} key={option}>
      {option}
    </li>
  );
};

const TeamTagsSelect = ({ name, label, required }: Props) => {
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
    />
  );
};

export default memo(TeamTagsSelect);
