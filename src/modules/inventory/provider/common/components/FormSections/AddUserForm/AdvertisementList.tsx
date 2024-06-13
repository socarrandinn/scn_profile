import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';

const AdvertisementList = () => {
  const { t } = useTranslation('supplier');

  return (
    <Box mt={2} fontSize={'small'} color={grey[600]}>
      <li>{t('form.necessary.registeredUsers')}</li>
      <li>{t('form.necessary.belongOneSupplier')}</li>
      <li>{t('form.necessary.noGeneralAdmins')}</li>
    </Box>
  );
};

export default AdvertisementList;
