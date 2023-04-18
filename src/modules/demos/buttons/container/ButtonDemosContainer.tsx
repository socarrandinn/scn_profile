import { memo } from 'react';
import LoadingButtonShowcase from 'modules/demos/buttons/components/LoadingButtonShowcase';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { code } from 'modules/demos/buttons/components/LoadingButtonShowcase/code';
import CodeShowCase from 'modules/demos/buttons/components/LoadingButtonShowcase/showcase';

const ButtonDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
        <LoadingButtonShowcase
            codeTitle={t('buttons.loadingButtons.title')}
            codeDescription={t('buttons.loadingButtons.description')}
            code={code}>
            <CodeShowCase/>
        </LoadingButtonShowcase>
    </Box>
  );
};

export default memo(ButtonDemosContainer);
