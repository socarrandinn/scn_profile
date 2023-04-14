import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import UserDeviceContainer from 'modules/security/users/containers/UserDeviceContainer';
import { Box, Typography } from '@mui/material';

const UserDeviceList = () => {
  const { t } = useTranslation('account');

  return (
    <Box>
      <Typography variant={'h3'} mb={3}>
        {t('account:devices.title')}
      </Typography>
      <UserDeviceContainer />
    </Box>
  );
};

export default memo(UserDeviceList);
