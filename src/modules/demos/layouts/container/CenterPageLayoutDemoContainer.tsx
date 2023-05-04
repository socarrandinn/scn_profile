import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CenterPageLayoutDemo from '../components/CenterPageLayoutDemo';
import { NORMAL_SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';

const CenterPageLayoutDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <CenterPageLayoutDemo
        codeTitle={t('layout.centerPageLayout.title')}
        codeDescription={t('layout.centerPageLayout.description')}
        defaultVisibleOption={NORMAL_SAMPLE_OPTIONS_ENUM.CODE}
      />
    </Box>
  );
};

export default memo(CenterPageLayoutDemoContainer);
