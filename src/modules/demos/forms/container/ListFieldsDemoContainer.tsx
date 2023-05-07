import { memo, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@dfl/mui-react-common';
import FormDemoSectionPanel from '../components/FormDemoSectionPanel';
import ListFieldsFormDemo from '../components/ListFieldsFormDemo';

const DemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} gap={8} flexDirection={'column'}>
      <FormDemoSectionPanel
        title={t('forms.listFieldsSample.title')}
        description={t('forms.listFieldsSample.description')}
      >
        <ListFieldsFormDemo />
      </FormDemoSectionPanel>
    </FlexBox>
  );
};

export default memo(DemoContainer);
