import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SidebarDemo from 'modules/demos/layouts/components/SidebarDemo';
import { sideBarSampleCode } from 'modules/demos/layouts/components/SidebarDemo/code';

const SidebarDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <SidebarDemo
        codeTitle={t('layout.sideBar.title')}
        codeDescription={t('layout.sideBar.description')}
        code={sideBarSampleCode}
        defaultCodeVisible={true}
      />
    </Box>
  );
};

export default memo(SidebarDemoContainer);
