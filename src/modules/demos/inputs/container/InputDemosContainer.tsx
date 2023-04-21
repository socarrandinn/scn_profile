import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TextFieldDemo from 'modules/demos/inputs/components/TextFieldDemo';
import { textFieldSampleCode } from 'modules/demos/inputs/components/TextFieldDemo/code';
import SearchDemo from 'modules/demos/inputs/components/SearchDemo';
import PasswordFieldDemo from 'modules/demos/inputs/components/PasswordFieldDemo';
import { passwordFieldSampleCode } from 'modules/demos/inputs/components/PasswordFieldDemo/code';
import SelectDemo from 'modules/demos/inputs/components/SelectDemo';
import { selectSampleCode } from 'modules/demos/inputs/components/SelectDemo/code';
import DatePickerDemo from 'modules/demos/inputs/components/DatePickerDemo';
import { datePickerSampleCode } from 'modules/demos/inputs/components/DatePickerDemo/code';
import TimePickerDemo from 'modules/demos/inputs/components/TimePickerDemo';
import { timePickerSampleCode } from 'modules/demos/inputs/components/TimePickerDemo/code';
import DatetimePickerDemo from 'modules/demos/inputs/components/DatetimePickerDemo';
import { datetimePickerSampleCode } from 'modules/demos/inputs/components/DatetimePickerDemo/code';
import SwitchDemo from 'modules/demos/inputs/components/SwitchDemo';
import { searchFieldSampleCode } from 'modules/demos/inputs/components/SwitchDemo/code';
import StatusPickerDemo from 'modules/demos/inputs/components/StatusPickerDemo';
import { statusPickerSampleCode } from 'modules/demos/inputs/components/StatusPickerDemo/code';

const InputDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <TextFieldDemo
        codeTitle={t('inputs.textField.title')}
        codeDescription={t('inputs.textField.description')}
        code={textFieldSampleCode}
      />
      <SearchDemo
        codeTitle={t('inputs.searchField.title')}
        codeDescription={t('inputs.searchField.description')}
        code={searchFieldSampleCode}
      />
      <PasswordFieldDemo
        codeTitle={t('inputs.passwordField.title')}
        codeDescription={t('inputs.passwordField.description')}
        code={passwordFieldSampleCode}
      />
      <SelectDemo
        codeTitle={t('inputs.select.title')}
        codeDescription={t('inputs.select.description')}
        code={selectSampleCode}
      />
      <DatetimePickerDemo
        codeTitle={t('inputs.datetimePicker.title')}
        codeDescription={t('inputs.datetimePicker.description')}
        code={datetimePickerSampleCode}
      />
      <DatePickerDemo
        codeTitle={t('inputs.datePicker.title')}
        codeDescription={t('inputs.datePicker.description')}
        code={datePickerSampleCode}
      />
      <TimePickerDemo
        codeTitle={t('inputs.timePicker.title')}
        codeDescription={t('inputs.timePicker.description')}
        code={timePickerSampleCode}
      />
      <SwitchDemo
        codeTitle={t('inputs.switch.title')}
        codeDescription={t('inputs.switch.description')}
        code={searchFieldSampleCode}
      />
      <StatusPickerDemo
        codeTitle={t('inputs.statusPicker.title')}
        codeDescription={t('inputs.statusPicker.description')}
        code={statusPickerSampleCode}
      />
      {/* <AutocompleteDemo
        codeTitle={t('inputs.autocomplete.title')}
        codeDescription={t('inputs.autocomplete.description')}
        code={autocompleteSampleCode}
      /> */}
    </Box>
  );
};

export default memo(InputDemosContainer);
