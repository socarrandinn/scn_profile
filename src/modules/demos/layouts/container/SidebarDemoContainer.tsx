import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SidebarDemo from '../components/SidebarDemo';
import { NORMAL_SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';

const SidebarDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <SidebarDemo
        codeTitle={t('layout.sideBar.title')}
        codeDescription={t('layout.sideBar.description')}
        defaultVisibleOption={NORMAL_SAMPLE_OPTIONS_ENUM.CODE}
      />
    </Box>
  );
};

export default memo(SidebarDemoContainer);
