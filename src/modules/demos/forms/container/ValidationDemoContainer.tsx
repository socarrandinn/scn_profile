import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import FormDemoSectionPanel from '../components/FormDemoSectionPanel';
import ValidationFormDemo from '../components/ValidationFormDemo';

const DemoContainer = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4}>
      <FormDemoSectionPanel
        title={t('forms.validationSample.title')}
        description={t('forms.validationSample.description')}
      >
        <ValidationFormDemo />
      </FormDemoSectionPanel>
    </Box>
  );
};

export default memo(DemoContainer);
