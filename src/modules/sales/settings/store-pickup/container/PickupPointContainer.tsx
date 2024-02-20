import { memo } from 'react';
import { PickupPointActive, PickupPointContent } from '../components/PickupPoint';
import { useTranslation } from 'react-i18next';
import { PaperSection } from 'components/PaperSection';
import { HelperText } from 'modules/inventory/settings/store-area/components/HelperText';
import { Stack } from '@mui/material';

const PickupPointContainer = () => {
  const { t } = useTranslation('storePickup');

  return (
    <Stack gap={{ xs: 1, md: 2 }}>
      <HelperText text={t('description')} />
      <PaperSection
        nm
        title={t('pickupPoint.title')}
        subtitle={t('pickupPoint.description')}
        actions={<PickupPointActive />}
      >
        <PickupPointContent />
      </PaperSection>
    </Stack>
  );
};

export default memo(PickupPointContainer);
