import { ListAltOutlined } from '@mui/icons-material';
import { Avatar, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const EmptyList = () => {
  const { t } = useTranslation('stock');
  return (
    <Stack flex={1} gap={1} justifyContent={'center'} alignItems={'center'} padding={2}>
      <Avatar variant='circular' sx={{ backgroundColor: 'primary.main', width: 90, height: 90 }}>
        <ListAltOutlined
          sx={{
            fontSize: 60,
            color: 'background.paper',
          }}
        />
      </Avatar>
      <Typography textAlign={'center'}>{t('emptyValue.emptyList')}</Typography>
    </Stack>
  );
};

export default memo(EmptyList);
