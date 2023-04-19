import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CenterPageLayoutDemo from 'modules/demos/layouts/components/CenterPageLayoutDemo';
import { centerPageSampleCode } from 'modules/demos/layouts/components/CenterPageLayoutDemo/code';

const CenterPageLayoutDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <CenterPageLayoutDemo
        codeTitle={t('layout.centerPageLayout.title')}
        codeDescription={t('layout.centerPageLayout.description')}
        code={centerPageSampleCode}
      />
    </Box>
  );
};

export default memo(CenterPageLayoutDemoContainer);
