import { memo, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@dfl/mui-react-common';
import FormDemoSectionPanel from '../components/FormDemoSectionPanel';
import ValidationFormDemo from '../components/ValidationFormDemo';
import LoginFormDemo from '../components/LoginFormDemo';

const DemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} gap={8} flexDirection={'column'}>
        <FormDemoSectionPanel
            title={t('forms.loginSample.title')}
            description={t('forms.loginSample.description')}
            linkId={'simple'}
        >
            <LoginFormDemo />
        </FormDemoSectionPanel>
      <FormDemoSectionPanel
        title={t('forms.validationSample.title')}
        description={t('forms.validationSample.description')}
        linkId={'validations'}
      >
        <ValidationFormDemo />
      </FormDemoSectionPanel>
    </FlexBox>
  );
};

export default memo(DemoContainer);
