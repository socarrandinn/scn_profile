import { Dispatch, memo, SetStateAction, useCallback } from 'react';
import { ReactComponent as WelcomeImage } from 'assets/onboarding.svg';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const OnboardingWelcome = ({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) => {
  const { t } = useTranslation('account');

  const handleNextClick = useCallback(() => {
    setStep(1)
  }, [setStep]);

  return (
    <div className='flex flex-col items-center justify-center px-14 pt-3 pb-6'>
      <WelcomeImage />
      <Typography sx={{ color: '#2B3445', fontSize: { xs: '22px', md: '32px' }, fontWeight: 700 }}>
        {t('onboarding.welcome.title')}
      </Typography>
      <Typography sx={{ color: '#2B3445', textAlign: 'center', maxWidth: '419px' }}>
        {t('onboarding.welcome.subtitle')} <br /> {t('onboarding.welcome.subtitle2')}
      </Typography>
      <Button variant='contained' sx={{ mt: 3 }} onClick={handleNextClick}>
        {t('onboarding.welcome.button')}
      </Button>
    </div>
  )
};

export default memo(OnboardingWelcome);
