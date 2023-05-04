import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import HtmlPreviewDemo from '../components/HtmlPreviewDemo';
import { NORMAL_SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';

const TagListDemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4}>
      <DemoSectionPanel
        title={t('dataDisplay.htmlPreview.title')}
        description={t('dataDisplay.htmlPreview.description')}
      >
        <HtmlPreviewDemo defaultVisibleOption={NORMAL_SAMPLE_OPTIONS_ENUM.CODE}/>
      </DemoSectionPanel>
    </Box>
  );
};

export default memo(TagListDemoContainer);
