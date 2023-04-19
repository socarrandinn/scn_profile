import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FlexDirectionDemo from 'modules/demos/containers/components/FlexDirectionDemo';
import { flexDirectionSampleCode } from 'modules/demos/containers/components/FlexDirectionDemo/code';

const AuthLayoutDemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <FlexDirectionDemo
        codeTitle={t('containers.flexBox.directionDemo.title')}
        codeDescription={t('containers.flexBox.directionDemo.description')}
        code={flexDirectionSampleCode}
      />
    </Box>
  );
};

export default memo(AuthLayoutDemoContainer);
