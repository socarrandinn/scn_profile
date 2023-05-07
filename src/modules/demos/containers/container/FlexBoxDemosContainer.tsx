import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import withCodeSample from 'hocs/withCodeSample';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import FlexDirectionDemo from '../components/FlexDirectionDemo';

const FlexBoxDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <DemoSectionPanel
        title={t('buttons.outlinedButtons.title')}
        description={t('buttons.outlinedButtons.description')}
      >
        <FlexDirectionDemo />
      </DemoSectionPanel>
    </Box>
  );
};

export default memo(withCodeSample(FlexBoxDemosContainer));
