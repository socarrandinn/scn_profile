import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import DemoSectionPanel from 'modules/common/components/DemoSectionPanel';
import EmptySearchResultDemo from 'modules/demos/data-display/components/EmptySearchResultDemo';

const ResultDemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4}>
      <DemoSectionPanel
        title={t('dataDisplay.result.emptySearch.title')}
        description={t('dataDisplay.result.emptySearch.description')}
        linkId={'empty-search'}
      >
        <EmptySearchResultDemo />
      </DemoSectionPanel>
    </Box>
  );
};

export default memo(ResultDemoContainer);
