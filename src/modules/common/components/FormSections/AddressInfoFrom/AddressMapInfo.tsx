import { Alert, Box, Collapse } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AddressMapInfo = () => {
  const [close, setClose] = useState(true);
  const { t } = useTranslation('common');
  return (
    <Box>
      <Collapse in={close}>
        <Alert
          security='info'
          onClose={() => {
            setClose(false);
          }}
        >
          {t('fields.address.note')}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default AddressMapInfo;
