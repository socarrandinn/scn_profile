import { useEffect } from 'react';
import { useTour } from '@reactour/tour';
import { STEPS_TOUR } from 'constants/STEPS_TOUR';
import tourService, { StepsGroup } from 'services/tour-service';
import { useMediaQueryMenu } from 'layouts/Sidebar/MainSidebar/hooks/useRootMenu';

const useCustomTour = (stepsGroup: StepsGroup) => {
  console.log('🚀 ~ useCustomTour ~ stepsGroup:', stepsGroup);
  const { setIsOpen, setCurrentStep, setSteps, currentStep } = useTour();
  const { lgUp } = useMediaQueryMenu();

  useEffect(() => {
    // if (!lgUp) return;
    const initTour = async () => {
      const seenSteps = await tourService.getSeenSteps(stepsGroup);

      const allSteps = STEPS_TOUR[stepsGroup as keyof typeof STEPS_TOUR]?.map((_, index) => index);
      console.log('🚀 ~ initTour ~ STEPS_TOUR[stepsGroup]:', STEPS_TOUR[stepsGroup]);
      console.log('🚀 ~ initTour ~ allSteps:', allSteps);

      let unseenSteps = allSteps.filter((step) => !seenSteps.includes(step));

      if (seenSteps.length === 0 && allSteps.length > 0) {
        unseenSteps = [0, ...unseenSteps];
      }

      if (unseenSteps.length > 0) {
        setSteps?.(STEPS_TOUR[stepsGroup as keyof typeof STEPS_TOUR]);
        setCurrentStep(unseenSteps[0]);
        setIsOpen(true);
      }
    };

    const timeout = setTimeout(initTour, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [setIsOpen, setSteps, setCurrentStep, stepsGroup, lgUp]);

  useEffect(() => {
    // if (!lgUp) return;
    if (currentStep !== undefined) {
      tourService.saveSeenStep(currentStep, stepsGroup);
    }
  }, [currentStep, lgUp, stepsGroup]);
  return {};
};

export default useCustomTour;
