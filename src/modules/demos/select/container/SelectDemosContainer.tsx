import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SelectDemo from 'modules/demos/select/components/SelectDemo';
import { selectSampleCode } from 'modules/demos/select/components/SelectDemo/code';

const SelectDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <SelectDemo
        codeTitle={t('select.select.title')}
        codeDescription={t('select.select.description')}
        code={selectSampleCode}
      />
    </Box>
  );
};

export default memo(SelectDemosContainer);
