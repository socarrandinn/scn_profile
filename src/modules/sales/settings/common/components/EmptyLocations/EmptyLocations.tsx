import { useTranslation } from 'react-i18next';
import { ReactComponent as LocationIcon } from 'assets/images/no-data/empty-locations.svg';
import { Typography } from '@mui/material';
import { memo, ReactNode } from 'react';

const EmptyLocations = ({ button }: { button: ReactNode }) => {
  const { t } = useTranslation('homeDelivery');

  return (
    <div className='flex flex-col items-center justify-center mb-5 relative'>
      <LocationIcon className='w-[344px] h-[244px] sm:w-[564px] sm:h-[364px]' />
      <Typography variant='h1' sx={{ mt: 1, textAlign: 'center' }}>
        {t('emptyLocations.title')}
      </Typography>
      <Typography variant='body1' sx={{ maxWidth: '466px', textAlign: 'center', mb: 2 }}>
        {t('emptyLocations.description')}
      </Typography>
      {button}
    </div>
  );
};

export default memo(EmptyLocations);
