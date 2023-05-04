import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import ProcessTimeLineDemo from '../components/ProcessTimeLineDemo';
import { NORMAL_SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';

const ProcessTimeLineDemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4}>
      <DemoSectionPanel
        title={t('dataDisplay.processTimeline.title')}
        description={t('dataDisplay.processTimeline.description')}
      >
        <ProcessTimeLineDemo defaultVisibleOption={NORMAL_SAMPLE_OPTIONS_ENUM.CODE}/>
      </DemoSectionPanel>
    </Box>
  );
};

export default memo(ProcessTimeLineDemoContainer);
