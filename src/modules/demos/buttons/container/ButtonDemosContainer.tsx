import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import OutlinedButtonDemo from 'modules/demos/buttons/components/OutlinedButtonDemo';
import { outlinedButtonSampleCode } from 'modules/demos/buttons/components/OutlinedButtonDemo/code';
import LoadingButtonDemo from 'modules/demos/buttons/components/LoadingButtonDemo';
import { loadingButtonsSampleCode } from 'modules/demos/buttons/components/LoadingButtonDemo/code';
import { socialButtonSampleCode } from 'modules/demos/buttons/components/SocialButtonDemo/code';
import SocialButtonDemo from 'modules/demos/buttons/components/SocialButtonDemo';

const ButtonDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <OutlinedButtonDemo
        codeTitle={t('buttons.outlinedButtons.title')}
        codeDescription={t('buttons.outlinedButtons.description')}
        code={outlinedButtonSampleCode}
      />
      <SocialButtonDemo
        codeTitle={t('buttons.socialButtons.title')}
        codeDescription={t('buttons.socialButtons.description')}
        code={socialButtonSampleCode}
      />
      <LoadingButtonDemo
        codeTitle={t('buttons.loadingButtons.title')}
        codeDescription={t('buttons.loadingButtons.description')}
        code={loadingButtonsSampleCode}
      />
    </Box>
  );
};

export default memo(ButtonDemosContainer);
