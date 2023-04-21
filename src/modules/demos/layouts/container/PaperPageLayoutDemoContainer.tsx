import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PaperPageLayoutDemo from 'modules/demos/layouts/components/PaperPageLayoutDemo';
import { paperPageSampleCode } from 'modules/demos/layouts/components/PaperPageLayoutDemo/code';

const PaperPageLayoutDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <PaperPageLayoutDemo
        codeTitle={t('layout.pagePaperLayout.title')}
        codeDescription={t('layout.pagePaperLayout.description')}
        code={paperPageSampleCode}
      />
    </Box>
  );
};

export default memo(PaperPageLayoutDemoContainer);
