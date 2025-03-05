import { useTranslation } from 'react-i18next';
import { ReactComponent as DeliveryDisabledIcon } from 'assets/images/no-data/delivery-disabled.svg';
import { Box, Typography } from '@mui/material';

const DeliveryDisabled = () => {
  const { t } = useTranslation('homeDelivery');

  return (
    <div className='flex flex-col items-center justify-center mb-24 mt-5 relative'>
      <DeliveryDisabledIcon className='w-80 h-60 sm:w-[600px] sm:h-[400px]' />
      <Box sx={{ position: 'absolute', bottom: { xs: '-25px', sm: '-10px' }, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }}>
        <Typography sx={{ fontSize: { xs: '24px', sm: '34px' }, fontWeight: 600 }}>{t('shippingDisabled.title')}</Typography>
        <Typography sx={{ textAlign: 'center', mb: 2, fontSize: { xs: '18px', sm: '22px' }, lineHeight: 1.2, color: '#2B3445' }}>
          {t('shippingDisabled.description')}
        </Typography>
      </Box>
    </div>
  )
};

export default DeliveryDisabled;
