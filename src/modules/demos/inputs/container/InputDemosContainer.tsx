import { memo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TextFieldDemo from 'modules/demos/inputs/components/TextFieldDemo';
import { textFieldSampleCode } from 'modules/demos/inputs/components/TextFieldDemo/code';
import SearchDemo from 'modules/demos/inputs/components/SearchDemo';
import { searchFieldSampleCode } from 'modules/demos/inputs/components/SearchDemo/code';
import PasswordFieldDemo from 'modules/demos/inputs/components/PasswordFieldDemo';
import { passwordFieldSampleCode } from 'modules/demos/inputs/components/PasswordFieldDemo/code';

const InputDemosContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box sx={{ my: 4 }}>
      <TextFieldDemo
        codeTitle={t('inputs.textField.title')}
        codeDescription={t('inputs.textField.description')}
        code={textFieldSampleCode}
      />
      <SearchDemo
        codeTitle={t('inputs.searchField.title')}
        codeDescription={t('inputs.searchField.description')}
        code={searchFieldSampleCode}
      />
      <PasswordFieldDemo
        codeTitle={t('inputs.passwordField.title')}
        codeDescription={t('inputs.passwordField.description')}
        code={passwordFieldSampleCode}
      />
    </Box>
  );
};

export default memo(InputDemosContainer);
