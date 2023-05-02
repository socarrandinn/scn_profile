import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import StatusPickerDemo from '../components/StatusPickerDemo';

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
    </FlexBox>
  );
};

export default memo(OthersDemosContainer);
