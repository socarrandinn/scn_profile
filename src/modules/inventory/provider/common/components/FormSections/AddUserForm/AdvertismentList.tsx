import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';

const AdvertismentList = () => {
  const { t } = useTranslation('supplier');

  return (
    <Box mt={2} fontSize={'small'} color={grey[600]}>
      <li>{t('form.necesary.registeredUsers')}</li>
      <li>{t('form.necesary.belongOneSupplier')}</li>
      <li>{t('form.necesary.noGeneralAdmins')}</li>
    </Box>
  );
};

export default AdvertismentList;
