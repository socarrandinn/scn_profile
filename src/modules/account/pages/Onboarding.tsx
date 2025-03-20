import { useCallback, useState } from 'react';
import { useAccountDetail } from '../contexts/AccountDetail';
import useAccountUpdateForm from '../hooks/useAccountUpdateForm';
import { InfoFormStep, WelcomeStep } from '../components/OnboardingSteps';
import ChangePasswordStep from '../components/OnboardingSteps/ChangePasswordStep';

type OnboardingProps = {
  onboardingCompleted: boolean;
};
const Onboarding = ({ onboardingCompleted }: OnboardingProps) => {
  const [step, setStep] = useState(onboardingCompleted ? 1 : 0);
  const { isLoading } = useAccountDetail();
  const onNext = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const form = useAccountUpdateForm(onNext);

  if (step === 0) {
    return <WelcomeStep setStep={setStep} />;
  }

  if (step === 1) {
    return <InfoFormStep form={form} isLoading={isLoading} />;
  }

  return <ChangePasswordStep setStep={setStep} />;
};

export default Onboarding;
