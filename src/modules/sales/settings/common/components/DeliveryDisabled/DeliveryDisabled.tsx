import { useTranslation } from 'react-i18next';
import { ReactComponent as DeliveryDisabledIcon } from 'assets/images/no-data/delivery-disabled.svg';
import { Box, Typography } from '@mui/material';

const DeliveryDisabled = () => {
  const { t } = useTranslation('homeDelivery');

  return (
    <div className='flex flex-col items-center justify-center mb-5 relative'>
      <DeliveryDisabledIcon width={600} height={400} />
      <Box sx={{ position: 'absolute', bottom: 15, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <Typography variant='h1' sx={{ mt: 1 }}>{t('shippingDisabled.title')}</Typography>
        <Typography variant='body1' sx={{ textAlign: 'center', mb: 2 }}>
          {t('shippingDisabled.description')}
        </Typography>
      </Box>
    </div>
  )
};

export default DeliveryDisabled;
