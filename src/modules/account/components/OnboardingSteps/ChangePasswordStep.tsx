import { Dispatch, memo, SetStateAction, useCallback } from 'react';
import { StepsHeader } from './StepsHeader';
import { ChangePassword } from '../AccountSecurityInfo';
import { SecurityIcon } from 'components/icons/SecurityIcon';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ChangePasswordStep = ({ setStep }: { setStep: Dispatch<SetStateAction<number>> }) => {
  const { t } = useTranslation('common');

  const handleBackClick = useCallback(() => {
    setStep(1)
  }, [setStep]);

  return (
    <ChangePassword
      title={
        <StepsHeader
          icon={<SecurityIcon sx={{ mt: 0.5 }} />}
          title='onboarding.changePassword.title'
          subtitle='onboarding.changePassword.subtitle'
        />
      }
      className='p-[32px_27px_10px_27px]'
      size='small'
      helperText={t('account:onboarding.changePassword.helperText')}
      otherAction={<Button color='success' onClick={handleBackClick}>{t('back')}</Button>}
      buttonText={t('save')}
    />
  )
};

export default memo(ChangePasswordStep);
