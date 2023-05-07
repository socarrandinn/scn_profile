import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import FormDemoSectionPanel from '../components/FormDemoSectionPanel';
import AsyncValidationFormDemo from '../components/AsyncValidationFormDemo';

const DemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4}>
      <FormDemoSectionPanel
        title={t('forms.asyncValidationSample.title')}
        description={t('forms.asyncValidationSample.description')}
      >
        <AsyncValidationFormDemo />
      </FormDemoSectionPanel>
    </Box>
  );
};

export default memo(DemoContainer);
