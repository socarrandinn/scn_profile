import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ScrollPageLayoutDemo from '../components/ScrollPageLayoutDemo';
import { NORMAL_SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';

const ScrollPageLayoutDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <ScrollPageLayoutDemo
        codeTitle={t('layout.scrollPageLayout.title')}
        codeDescription={t('layout.scrollPageLayout.description')}
        defaultVisibleOption={NORMAL_SAMPLE_OPTIONS_ENUM.CODE}
      />
    </Box>
  );
};

export default memo(ScrollPageLayoutDemoContainer);
