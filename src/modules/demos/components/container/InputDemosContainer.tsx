import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import TextFieldDemo from '../components/TextFieldDemo';
import SearchDemo from '../components/SearchDemo';
import PasswordFieldDemo from '../components/PasswordFieldDemo';
import SwitchDemo from '../components/SwitchDemo';
import StatusPickerDemo from '../components/StatusPickerDemo';

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
      <DemoSectionPanel title={t('inputs.switch.title')} description={t('inputs.switch.description')} linkId={'switch'}>
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
