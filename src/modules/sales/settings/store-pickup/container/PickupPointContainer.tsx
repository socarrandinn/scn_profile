import { memo } from 'react';
import { PickupPointActive, PickupPointContent } from '../components/PickupPoint';
import { useTranslation } from 'react-i18next';
import { PaperSection } from 'components/PaperSection';

const PickupPointContainer = () => {
  const { t } = useTranslation('storePickup');

  return (
    <PaperSection
      nm
      title={t('pickupPoint.title')}
      subtitle={t('pickupPoint.description')}
      actions={<PickupPointActive />}
    >
      <PickupPointContent />
    </PaperSection>
  );
};

export default memo(PickupPointContainer);
