import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@dfl/mui-react-common';
import FormDemoSectionPanel from '../components/FormDemoSectionPanel';
import LoginFormDemo from '../components/LoginFormDemo';
import ValidationFormDemo from '../components/ValidationFormDemo';

const FormsDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} gap={4} flexDirection={'column'}>
        <FormDemoSectionPanel
            title={t('forms.loginSample.title')}
            description={t('forms.loginSample.description')}
        >
            <LoginFormDemo />
        </FormDemoSectionPanel>
        <FormDemoSectionPanel
            title={t('forms.validationSample.title')}
            description={t('forms.validationSample.description')}
        >
            <ValidationFormDemo />
        </FormDemoSectionPanel>
    </FlexBox>
  );
};

export default memo(FormsDemosContainer);
