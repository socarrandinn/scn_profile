import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ScrollPageLayoutDemo from 'modules/demos/layouts/components/ScrollPageLayoutDemo';
import { scrollPageSampleCode } from 'modules/demos/layouts/components/ScrollPageLayoutDemo/code';

const ScrollPageLayoutDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <ScrollPageLayoutDemo
        codeTitle={t('layout.scrollPageLayout.title')}
        codeDescription={t('layout.scrollPageLayout.description')}
        code={scrollPageSampleCode}
        defaultCodeVisible={true}
      />
    </Box>
  );
};

export default memo(ScrollPageLayoutDemoContainer);
