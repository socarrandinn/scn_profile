import { StoreOutlined } from '@mui/icons-material';
import { FormPaper } from 'modules/common/components/FormPaper';
import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const WarehouseNotExit = () => {
  const { t } = useTranslation('stock');
  return (
    <FormPaper nm title=''>
      <Stack justifyContent={'center'} alignItems={'center'} gap={1}>
        <StoreOutlined
          sx={{
            backgroundColor: 'primary.main',
            borderRadius: 50,
            padding: 1.5,
            fontSize: 80,
            color: 'background.paper',
          }}
        />

        <Typography variant='h1'>{t('distributionWarehouseNotExist')}</Typography>
      </Stack>
    </FormPaper>
  );
};

export default memo(WarehouseNotExit);
