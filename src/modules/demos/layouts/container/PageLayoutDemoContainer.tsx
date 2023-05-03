import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageLayoutDemo from 'modules/demos/layouts/components/PageLayoutDemo';
import { NORMAL_SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';

const PageLayoutDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <PageLayoutDemo
        codeTitle={t('layout.pageLayout.title')}
        codeDescription={t('layout.pageLayout.description')}
        defaultVisibleOption={NORMAL_SAMPLE_OPTIONS_ENUM.CODE}
      />
    </Box>
  );
};

export default memo(PageLayoutDemoContainer);
