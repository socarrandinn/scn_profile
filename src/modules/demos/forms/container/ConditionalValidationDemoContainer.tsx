import { memo, FC } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import FormDemoSectionPanel from '../components/FormDemoSectionPanel';
import ConditionalValidationFormDemo from '../components/ConditionalValidationFormDemo';

const ConditionalValidationDemoContainer: FC = () => {
  const { t } = useTranslation('demos');

  return (
    <Box my={4} >
        <FormDemoSectionPanel
            title={t('forms.conditionalValidationSample.title')}
            description={t('forms.conditionalValidationSample.description')}
        >
            <ConditionalValidationFormDemo />
        </FormDemoSectionPanel>
    </Box>
  );
};

export default memo(ConditionalValidationDemoContainer);
