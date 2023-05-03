import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import SkeletonListDemo from '../components/SkeletonListDemo';

const SkeletonListDemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4}>
      <DemoSectionPanel
        title={t('dataDisplay.skeletonList.title')}
        description={t('dataDisplay.skeletonList.description')}
      >
        <SkeletonListDemo defaultCodeVisible={true}/>
      </DemoSectionPanel>
    </Box>
  );
};

export default memo(SkeletonListDemoContainer);
