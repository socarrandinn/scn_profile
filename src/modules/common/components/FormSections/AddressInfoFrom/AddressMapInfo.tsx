import { Alert, Collapse } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AddressMapInfo = () => {
  const [close, setClose] = useState(true);
  const { t } = useTranslation('common');
  return (
    <Collapse in={close} >
      <Alert
        security='info'
        onClose={() => {
          setClose(false);
        }}
      >
        {t('fields.address.note')}
      </Alert>
    </Collapse>
  );
};

export default AddressMapInfo;
