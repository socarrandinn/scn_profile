import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IRobotTxt } from 'modules/cms/seo/robot-txt/interfaces';
import { ROBOT_TXTS_LIST_KEY } from 'modules/cms/seo/robot-txt/constants';
import { RobotTxtService } from 'modules/cms/seo/robot-txt/services';

type RobotTxtSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IRobotTxt) => option.name || '';

const renderOption = (props: any, option: IRobotTxt, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const RobotTxtSelect = ({ name, required, multiple, label, placeholder, helperText }: RobotTxtSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={RobotTxtService.search}
      queryKey={ROBOT_TXTS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? RobotTxtService.search : RobotTxtService.getOne}
      id='select-robot-txt'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(RobotTxtSelect);
