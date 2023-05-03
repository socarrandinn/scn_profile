import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TabsPaperPageLayoutDemo from '../components/TabsPaperPageLayoutDemo';
import { NORMAL_SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';

const TabsPaperPageLayoutDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <TabsPaperPageLayoutDemo
        codeTitle={t('layout.tabsPaperLayout.title')}
        codeDescription={t('layout.tabsPaperLayout.description')}
        defaultVisibleOption={NORMAL_SAMPLE_OPTIONS_ENUM.CODE}
      />
    </Box>
  );
};

export default memo(TabsPaperPageLayoutDemoContainer);
