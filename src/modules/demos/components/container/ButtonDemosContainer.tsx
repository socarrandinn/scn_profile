import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import OutlinedButtonCodeDemo from '../components/OutlinedButtonDemo';
import SocialButtonDemo from '../components/SocialButtonDemo';
import LoadingButtonDemo from '../components/LoadingButtonDemo';

const ButtonDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <DemoSectionPanel
        title={t('buttons.outlinedButtons.title')}
        description={t('buttons.outlinedButtons.description')}
        linkId={'outlined'}
      >
        <OutlinedButtonCodeDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('buttons.socialButtons.title')}
        description={t('buttons.socialButtons.description')}
        linkId={'social'}
      >
        <SocialButtonDemo />
      </DemoSectionPanel>
      <DemoSectionPanel
        title={t('buttons.loadingButtons.title')}
        description={t('buttons.loadingButtons.description')}
        linkId={'loading'}
      >
        <LoadingButtonDemo />
      </DemoSectionPanel>
    </Box>
  );
};

export default memo(ButtonDemosContainer);
