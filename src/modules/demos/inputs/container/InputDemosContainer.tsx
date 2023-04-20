import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TextFieldDemo from 'modules/demos/inputs/components/TextFieldDemo';
import { textFieldSampleCode } from 'modules/demos/inputs/components/TextFieldDemo/code';

const InputDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <TextFieldDemo
        codeTitle={t('inputs.textField.title')}
        codeDescription={t('inputs.textField.description')}
        code={textFieldSampleCode}
      />
    </Box>
  );
};

export default memo(InputDemosContainer);
