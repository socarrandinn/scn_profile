import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';


const EmptyResultCmp = () => {
  const { t } = useTranslation('homeDelivery');

  return (
    <Box sx={{ py: 3, fontWeight: 500, '.MuiCollapse-root': { background: '#FFF !important', paddingBottom: '10px !important' } }}>
      {t('emptyResult')}
    </Box>
  )
};

export default EmptyResultCmp;
