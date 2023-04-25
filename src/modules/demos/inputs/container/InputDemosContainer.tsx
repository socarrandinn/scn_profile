import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TextFieldDemo from 'modules/demos/inputs/components/TextFieldDemo';
import SearchDemo from 'modules/demos/inputs/components/SearchDemo';
import PasswordFieldDemo from 'modules/demos/inputs/components/PasswordFieldDemo';
import SelectDemo from 'modules/demos/inputs/components/SelectDemo';
import DatePickerDemo from 'modules/demos/inputs/components/DatePickerDemo';
import TimePickerDemo from 'modules/demos/inputs/components/TimePickerDemo';
import DatetimePickerDemo from 'modules/demos/inputs/components/DatetimePickerDemo';
import SwitchDemo from 'modules/demos/inputs/components/SwitchDemo';
import StatusPickerDemo from 'modules/demos/inputs/components/StatusPickerDemo';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';

const InputDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
        <DemoSectionPanel
            title={t('inputs.textField.title')}
            description={t('inputs.textField.description')}
        >
            <TextFieldDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.searchField.title')}
            description={t('inputs.searchField.description')}
        >
            <SearchDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.passwordField.title')}
            description={t('inputs.passwordField.description')}
        >
            <PasswordFieldDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.select.title')}
            description={t('inputs.select.description')}
        >
            <SelectDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.datetimePicker.title')}
            description={t('inputs.datetimePicker.description')}
        >
            <DatetimePickerDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.datePicker.title')}
            description={t('inputs.datePicker.description')}
        >
            <DatePickerDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.timePicker.title')}
            description={t('inputs.timePicker.description')}
        >
            <TimePickerDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.switch.title')}
            description={t('inputs.switch.description')}
        >
            <SwitchDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.statusPicker.title')}
            description={t('inputs.statusPicker.description')}
        >
            <StatusPickerDemo />
        </DemoSectionPanel>
    </Box>
  );
};

export default memo(InputDemosContainer);
