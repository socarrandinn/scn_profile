import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@dfl/mui-react-common';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import SkeletonFormDemo from '../components/SkeletonFormDemo';
import SkeletonListDemo from '../components/SkeletonListDemo';

const SkeletonsDemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <FlexBox my={4} flexDirection={'column'} justifyContent={'center'} alignItems={'stretch'}>
      <DemoSectionPanel
        title={t('dataDisplay.skeletonForm.title')}
        description={t('dataDisplay.skeletonForm.description')}
        linkId={'skeleton-form'}
      >
        <SkeletonFormDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('dataDisplay.skeletonList.title')}
        description={t('dataDisplay.skeletonList.description')}
        linkId={'skeleton-list'}
      >
        <SkeletonListDemo />
      </DemoSectionPanel>
    </FlexBox>
  );
};

export default memo(SkeletonsDemoContainer);
