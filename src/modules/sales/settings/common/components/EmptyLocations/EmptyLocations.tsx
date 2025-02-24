import { useTranslation } from 'react-i18next';
import { ReactComponent as LocationIcon } from 'assets/images/no-data/empty-locations.svg';
import { Typography } from '@mui/material';
import { AddLocationButton } from '../AddLocationButton';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';

const EmptyLocations = () => {
  const { t } = useTranslation('homeDelivery');

  return (
    <div className='flex flex-col items-center justify-center mb-5 relative'>
      <LocationIcon />
      <Typography variant='h1' sx={{ mt: 1 }}>
        {t('emptyLocations.title')}
      </Typography>
      <Typography variant='body1' sx={{ maxWidth: '466px', textAlign: 'center', mb: 2 }}>
        {t('emptyLocations.description')}
      </Typography>
      <AddLocationButton deliveryType={MS_LOCATION_CONFIG.isCuban ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY} />
    </div>
  );
};

export default EmptyLocations;
