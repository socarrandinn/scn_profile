import { memo } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { GeneralActions } from 'layouts/portals';
import { useTranslation } from 'react-i18next';
import { Add } from '@mui/icons-material';

const PickUpPointListToolbar = () => {
  const { t } = useTranslation('warehousePickup');

  return (
    <>
      <GeneralActions>
        <Stack
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={1}
          alignItems={{ xs: 'start', md: 'center' }}
          justifyContent={'space-between'}
        >
          <Typography fontWeight={600}>{t('pickupPoint.list')}</Typography>
          <Button variant='outlined' startIcon={<Add />} onClick={() => { }}>
            {t('pickupPoint.addPoint')}
          </Button>
        </Stack>
      </GeneralActions>
    </>
  );
};

export default memo(PickUpPointListToolbar);
