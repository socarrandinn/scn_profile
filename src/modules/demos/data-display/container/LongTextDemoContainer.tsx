import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import LongTextDemo from '../components/LongTextDemo';
import { NORMAL_SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';

const LongTextDemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4}>
      <DemoSectionPanel title={t('dataDisplay.longText.title')} description={t('dataDisplay.longText.description')}>
        <LongTextDemo defaultVisibleOption={NORMAL_SAMPLE_OPTIONS_ENUM.CODE} />
      </DemoSectionPanel>
    </Box>
  );
};

export default memo(LongTextDemoContainer);
