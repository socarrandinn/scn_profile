import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import SkeletonFormDemo from '../components/SkeletonFormDemo';

const SkeletonFormDemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4}>
      <DemoSectionPanel
        title={t('dataDisplay.skeletonForm.title')}
        description={t('dataDisplay.skeletonForm.description')}
      >
        <SkeletonFormDemo defaultCodeVisible={true}/>
      </DemoSectionPanel>
    </Box>
  );
};

export default memo(SkeletonFormDemoContainer);
