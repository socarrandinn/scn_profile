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
import { FlexBox } from '@dfl/mui-react-common';

const InputDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} gap={8} flexDirection={'column'}>
        <DemoSectionPanel
            title={t('inputs.textField.title')}
            description={t('inputs.textField.description')}
            linkId={'textField'}
        >
            <TextFieldDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.searchField.title')}
            description={t('inputs.searchField.description')}
            linkId={'search'}
        >
            <SearchDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.passwordField.title')}
            description={t('inputs.passwordField.description')}
            linkId={'password'}
        >
            <PasswordFieldDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.select.title')}
            description={t('inputs.select.description')}
            linkId={'select'}
        >
            <SelectDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.datetimePicker.title')}
            description={t('inputs.datetimePicker.description')}
            linkId={'datetime'}
        >
            <DatetimePickerDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.datePicker.title')}
            description={t('inputs.datePicker.description')}
            linkId={'date'}
        >
            <DatePickerDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.timePicker.title')}
            description={t('inputs.timePicker.description')}
            linkId={'time'}
        >
            <TimePickerDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.switch.title')}
            description={t('inputs.switch.description')}
            linkId={'switch'}
        >
            <SwitchDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('inputs.statusPicker.title')}
            description={t('inputs.statusPicker.description')}
            linkId={'statusPicker'}
        >
            <StatusPickerDemo />
        </DemoSectionPanel>
    </FlexBox>
  );
};

export default memo(InputDemosContainer);
