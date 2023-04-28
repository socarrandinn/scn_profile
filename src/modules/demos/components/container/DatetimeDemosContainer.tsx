import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import DatePickerDemo from '../components/DatePickerDemo';
import TimePickerDemo from '../components/TimePickerDemo';
import DatetimePickerDemo from '../components/DatetimePickerDemo';

const DatetimeDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} gap={8} flexDirection={'column'}>
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
    </FlexBox>
  );
};

export default memo(DatetimeDemosContainer);
