import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import { useTranslation } from 'react-i18next';

const NotificationEmpty = () => {
  const { t } = useTranslation('notification');

  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        padding: { xs: 2, md: 4 },
        gap: 1,
      }}
    >
      <NotificationsOffOutlinedIcon sx={{ fontSize: { xs: 80, md: 160 }, color: 'primary.main' }} />
      <Typography textAlign={'center'} variant='h1'>
        {t('notificationEmpty.title')}
      </Typography>
      <Box
        sx={{
          height: 2,
          width: 100,
          backgroundColor: 'primary.main',
        }}
      />
      <Typography textAlign={'center'}>{t('notificationEmpty.description')}</Typography>
    </Stack>
  );
};

export default memo(NotificationEmpty);
