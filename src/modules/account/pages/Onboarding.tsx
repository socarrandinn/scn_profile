import { useCallback, useState } from 'react';
import { useAccountDetail } from 'modules/account/contexts/AccountDetail';
import useAccountUpdateForm from 'modules/account/hooks/useAccountUpdateForm';
import { UserGeneralInfo } from 'modules/security/users/components/UserGeneralInfo';
import { ChangePassword } from 'modules/account/components/AccountSecurityInfo';

type OnboardingProps = {
  isRequiredChangePassword: boolean,
  onboardingCompleted: boolean
}
const Onboarding = ({ isRequiredChangePassword, onboardingCompleted }: OnboardingProps) => {
  const { isLoading } = useAccountDetail();
  const [step, setStep] = useState(onboardingCompleted ? 1 : 0);
  const onNext = useCallback(() => {
    setStep(prev => prev + 1);
  }, []);

  const form = useAccountUpdateForm(onNext);
  if (step === 0) {
    return <UserGeneralInfo {...form} isLoadingUser={isLoading} isMe/>;
  }
  return <ChangePassword />;
};

export default Onboarding;
