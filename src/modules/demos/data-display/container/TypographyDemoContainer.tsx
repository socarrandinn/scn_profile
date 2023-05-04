import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import TypographyDemo from '../components/TypographyDemo';

const TypographyDemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4}>
      <DemoSectionPanel
        title={t('dataDisplay.typography.title')}
        description={t('dataDisplay.typography.description')}
      >
        <TypographyDemo defaultCodeVisible={true}/>
      </DemoSectionPanel>
    </Box>
  );
};

export default memo(TypographyDemoContainer);
