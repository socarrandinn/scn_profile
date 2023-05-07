import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import SelectDemo from '../components/SelectDemo';
import LanguageSelectDemo from '../components/LanguageSelectDemo';
import AsyncSelectDemo from '../components/AsyncSelectDemo';

const SelectDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} gap={8} flexDirection={'column'}>
      <DemoSectionPanel
        title={t('selects.select.title')}
        description={t('selects.select.description')}
        linkId={'select'}
      >
        <SelectDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('selects.language.title')}
        description={t('selects.language.description')}
        linkId={'language'}
      >
        <LanguageSelectDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('selects.asyncSelect.title')}
        description={t('selects.asyncSelect.description')}
        linkId={'async'}
      >
        <AsyncSelectDemo />
      </DemoSectionPanel>
    </FlexBox>
  );
};

export default memo(SelectDemosContainer);
