import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TabsPaperPageLayoutDemo from 'modules/demos/layouts/components/TabsPaperPageLayoutDemo';
import { tabsPaperPageSampleCode } from 'modules/demos/layouts/components/TabsPaperPageLayoutDemo/code';

const TabsPaperPageLayoutDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <TabsPaperPageLayoutDemo
        codeTitle={t('layout.tabsPaperLayout.title')}
        codeDescription={t('layout.tabsPaperLayout.description')}
        code={tabsPaperPageSampleCode}
        defaultCodeVisible={true}
      />
    </Box>
  );
};

export default memo(TabsPaperPageLayoutDemoContainer);
