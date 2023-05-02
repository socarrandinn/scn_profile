import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import SwitchDemo from '../components/SwitchDemo';
import CheckBoxDemo from '../components/CheckBoxDemo';

const BooleanDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} gap={8} flexDirection={'column'}>
      <DemoSectionPanel
        title={t('boolean.switch.title')}
        description={t('boolean.switch.description')}
        linkId={'switch'}
      >
        <SwitchDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('boolean.checkbox.title')}
        description={t('boolean.checkbox.description')}
        linkId={'checkbox'}
      >
        <CheckBoxDemo />
      </DemoSectionPanel>
    </FlexBox>
  );
};

export default memo(BooleanDemosContainer);
