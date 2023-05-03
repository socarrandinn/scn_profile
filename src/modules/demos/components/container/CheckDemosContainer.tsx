import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import SwitchDemo from '../components/SwitchDemo';
import CheckBoxDemo from '../components/CheckBoxDemo';
import RadioButtonDemo from '../components/RadioButtonDemo';
import ToggleButtonsGroupDemo from '../components/ToggleButtonsGroupDemo';

const CheckDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} gap={8} flexDirection={'column'}>
      <DemoSectionPanel title={t('check.switch.title')} description={t('check.switch.description')} linkId={'switch'}>
        <SwitchDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('check.checkbox.title')}
        description={t('check.checkbox.description')}
        linkId={'checkbox'}
      >
        <CheckBoxDemo />
      </DemoSectionPanel>
      <DemoSectionPanel title={t('check.radio.title')} description={t('check.radio.description')} linkId={'radio'}>
        <RadioButtonDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('check.toggleButtonGroup.title')}
        description={t('check.toggleButtonGroup.description')}
        linkId={'toggleButtonGroup'}
      >
        <ToggleButtonsGroupDemo />
      </DemoSectionPanel>
    </FlexBox>
  );
};

export default memo(CheckDemosContainer);
