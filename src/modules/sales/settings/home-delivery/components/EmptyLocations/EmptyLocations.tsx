import { useTranslation } from 'react-i18next';
import { ReactComponent as LocationIcon } from 'assets/images/no-data/empty-locations.svg';
import { Alert, Typography } from '@mui/material';
import { AddLocationButton } from '../AddLocationButton';
import { useShippingHomeSettings } from '../../contexts';

const EmptyLocations = () => {
  const { settings } = useShippingHomeSettings();
  const { t } = useTranslation('homeDelivery');

  return (
    <div className='flex flex-col items-center justify-center mb-5'>
      <LocationIcon />
      {settings?.enabled ? (
        <>
          <Typography variant='h1' sx={{ mt: 1 }}>{t('emptyLocations.title')}</Typography>
          <Typography variant='body1' sx={{ maxWidth: '466px', textAlign: 'center', mb: 2 }}>
            {t('emptyLocations.description')}
          </Typography>
          <AddLocationButton />
        </>
      ) : (
        <Alert severity='error' sx={{ maxWidth: '466px', textAlign: 'center', mt: 2 }}>
          Active la entrega a domicilio para poder adicionar nuevas localizaciones
        </Alert>
      )}
    </div>
  )
};

export default EmptyLocations;
