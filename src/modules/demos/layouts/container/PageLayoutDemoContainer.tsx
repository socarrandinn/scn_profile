import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageLayoutDemo from 'modules/demos/layouts/components/PageLayoutDemo';
import { pageSampleCode } from 'modules/demos/layouts/components/PageLayoutDemo/code';

const PageLayoutDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <PageLayoutDemo
        codeTitle={t('layout.pageLayout.title')}
        codeDescription={t('layout.pageLayout.description')}
        code={pageSampleCode}
      />
    </Box>
  );
};

export default memo(PageLayoutDemoContainer);
