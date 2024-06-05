import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IDisallowedWord } from 'modules/crm/disallowed-word/interfaces';
import { DISALLOWED_WORDS_LIST_KEY } from 'modules/crm/disallowed-word/constants';
import { DisallowedWordService } from 'modules/crm/disallowed-word/services';

type DisallowedWordSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IDisallowedWord) => option.name || '';

const renderOption = (props: any, option: IDisallowedWord, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const DisallowedWordSelect = ({ name, required, multiple, label, placeholder, helperText }: DisallowedWordSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={DisallowedWordService.search}
      queryKey={DISALLOWED_WORDS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? DisallowedWordService.search : DisallowedWordService.getOne}
      id='select-disallowed-word'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(DisallowedWordSelect);
