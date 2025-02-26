import { useTranslation } from 'react-i18next';
import { ReactComponent as LocationIcon } from 'assets/images/no-data/empty-locations.svg';
import { Typography } from '@mui/material';
import { ReactNode } from 'react';

const EmptyLocations = ({ button }: { button: ReactNode }) => {
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
      {button}
    </div>
  );
};

export default EmptyLocations;
