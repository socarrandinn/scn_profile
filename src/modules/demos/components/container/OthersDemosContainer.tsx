import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import StatusPickerDemo from '../components/StatusPickerDemo';
import TagListDemo from '../components/TagListDemo';

const OthersDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} gap={8} flexDirection={'column'}>
        <DemoSectionPanel
            title={t('others.statusPicker.title')}
            description={t('others.statusPicker.description')}
            linkId={'statusPicker'}
        >
            <StatusPickerDemo />
        </DemoSectionPanel>
        <DemoSectionPanel
            title={t('others.tagList.title')}
            description={t('others.tagList.description')}
            linkId={'tagList'}
        >
            <TagListDemo />
        </DemoSectionPanel>
    </FlexBox>
  );
};

export default memo(OthersDemosContainer);
