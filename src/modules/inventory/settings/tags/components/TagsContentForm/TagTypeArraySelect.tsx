import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo } from 'react';
import { Checkbox } from '@mui/material';
import { useFindOneTags } from '../../hooks/useFindOneTags';

type TagTypeArraySelectProps = {
  name: string;
  label: string;
  multiple?: boolean;
  required?: boolean;
  tagId: string
};

export const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option;
  const valueId = value;
  return optionId === valueId;
};

const TagTypeArraySelect = ({
  label,
  name,
  tagId,
  multiple = false,
  required,
}: TagTypeArraySelectProps) => {
  const renderLabel = (option: string) => option;
  const { data } = useFindOneTags(tagId)

  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {option}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id='select-tag'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      name={name}
      label={required ? `${label}*` : label}
      options={data?.values || []}
      multiple={multiple}
      disableCloseOnSelect={multiple}
    />
  );
};

export default memo(TagTypeArraySelect);
