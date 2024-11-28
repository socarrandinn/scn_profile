import { Avatar, Stack, Typography } from '@mui/material';
import { SupplierIcon } from 'modules/inventory/common/components/Icons/SupplierIcon';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const SupplierNoRelationEmpty = () => {
  const { t } = useTranslation('stock');
  return (
    <Stack flex={1} gap={1} justifyContent={'center'} alignItems={'center'} padding={2}>
      <Avatar variant='circular' sx={{ backgroundColor: 'primary.main', width: 120, height: 120 }}>
        <SupplierIcon
          sx={{
            fontSize: 80,
            color: 'background.paper',
          }}
        />
      </Avatar>
      <Typography textAlign={'center'}>{t('supplierNotRelationListEmpty')}</Typography>
    </Stack>
  );
};

export default memo(SupplierNoRelationEmpty);
