import { memo } from 'react';
import { PickupPointActive, PickupPointContent } from '../components/PickupPoint';
import { useTranslation } from 'react-i18next';
import { HelperText } from 'modules/inventory/settings/store-area/components/HelperText';
import { Stack } from '@mui/material';
import { PagePaperLayout } from 'layouts/index';

const PickupPointContainer = () => {
  const { t } = useTranslation('storePickup');

  return (
    <Stack gap={{ xs: 1, md: 2 }}>
      <HelperText text={t('description')} />
      <PagePaperLayout title={t('pickupPoint.title')}>
        <Stack gap={3} paddingY={1.5}>
          <PickupPointActive description={t('pickupPoint.description')} />

          <PickupPointContent />
        </Stack>
      </PagePaperLayout>
    </Stack>
  );
};

export default memo(PickupPointContainer);
