import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PaperPageLayoutDemo from '../components/PaperPageLayoutDemo';
import { NORMAL_SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';

const PaperPageLayoutDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <PaperPageLayoutDemo
        codeTitle={t('layout.pagePaperLayout.title')}
        codeDescription={t('layout.pagePaperLayout.description')}
        defaultVisibleOption={NORMAL_SAMPLE_OPTIONS_ENUM.CODE}
      />
    </Box>
  );
};

export default memo(PaperPageLayoutDemoContainer);
