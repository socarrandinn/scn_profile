import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import FormDemoSectionPanel from '../components/FormDemoSectionPanel';
import NestedFieldsFormDemo from '../components/NestedFieldsFormDemo';
import { FlexBox } from '@dfl/mui-react-common';

const DemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} gap={8} flexDirection={'column'}>
        <FormDemoSectionPanel
            title={t('forms.nestedFieldsSample.title')}
            description={t('forms.nestedFieldsSample.description')}
        >
            <NestedFieldsFormDemo />
        </FormDemoSectionPanel>
    </FlexBox>
  );
};

export default memo(DemoContainer);
