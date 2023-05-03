import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import TextFieldDemo from '../components/TextFieldDemo';
import SearchDemo from '../components/SearchDemo';
import PasswordFieldDemo from '../components/PasswordFieldDemo';
import PhoneInputDemo from '../components/PhoneInputDemo';

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
            title={t('inputs.phone.title')}
            description={t('inputs.phone.description')}
            linkId={'password'}
        >
            <PhoneInputDemo />
        </DemoSectionPanel>
    </FlexBox>
  );
};

export default memo(InputDemosContainer);
