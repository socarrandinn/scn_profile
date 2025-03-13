import { useEffect } from 'react';
import { useTour } from '@reactour/tour';
import { STEPS_TOUR } from 'constants/STEPS_TOUR';
import tourService, { StepsGroup } from 'services/tour-service';
import { useMediaQueryMenu } from 'layouts/Sidebar/MainSidebar/hooks/useRootMenu';
import { useTourContext } from 'contexts/TourProvider';

const useDFLTour = (stepsGroup: StepsGroup, launchTour: boolean | undefined = false) => {
  const { setIsOpen, setCurrentStep, setSteps } = useTour();
  const { lgUp } = useMediaQueryMenu();
  const { setStepsGroup } = useTourContext();

  useEffect(() => {
    if (!lgUp) return;
    setStepsGroup(stepsGroup);
    const initTour = async () => {
      const seenSteps = await tourService.getSeenStepsfromLocalStorage(stepsGroup);
      const allSteps = STEPS_TOUR[stepsGroup as keyof typeof STEPS_TOUR]?.map((step, index) => step._id);

      const unseenSteps = allSteps?.filter((step) => !seenSteps?.includes(step));
      if (unseenSteps?.length) {
        setSteps?.(STEPS_TOUR[stepsGroup as keyof typeof STEPS_TOUR]);
        setCurrentStep(unseenSteps?.[0]);
        setIsOpen(true);
      }
    };

    if (launchTour) {
      initTour();
    }
  }, [setIsOpen, setSteps, setCurrentStep, stepsGroup, lgUp, launchTour, setStepsGroup]);

  return {};
};

export default useDFLTour;
