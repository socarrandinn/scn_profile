import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import HtmlPreviewDemo from '../components/HtmlPreviewDemo';

const TagListDemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4}>
      <DemoSectionPanel
        title={t('dataDisplay.htmlPreview.title')}
        description={t('dataDisplay.htmlPreview.description')}
      >
        <HtmlPreviewDemo defaultCodeVisible={true}/>
      </DemoSectionPanel>
    </Box>
  );
};

export default memo(TagListDemoContainer);
