import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import TypographyDemo from '../components/TypographyDemo';
import { NORMAL_SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';

const TypographyDemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4}>
      <DemoSectionPanel
        title={t('dataDisplay.typography.title')}
        description={t('dataDisplay.typography.description')}
      >
        <TypographyDemo defaultVisibleOption={NORMAL_SAMPLE_OPTIONS_ENUM.CODE}/>
      </DemoSectionPanel>
    </Box>
  );
};

export default memo(TypographyDemoContainer);
