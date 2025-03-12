import React, { useCallback } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTourContext } from 'contexts/TourProvider';
import tourService from 'services/tour-service';

export const TourNextButton = ({ ...props }) => {
  const { stepsGroup } = useTourContext();
  // eslint-disable-next-line react/prop-types
  const { setCurrentStep, currentStep } = props;

  const handleNextStep = useCallback(() => {
    const nextStep = Number(currentStep) + 1;
    setCurrentStep(nextStep);
    // sessionStorage.setItem(stepsGroup, currentStep);
    tourService.saveSeenStep(currentStep, stepsGroup);
  }, [currentStep, setCurrentStep, stepsGroup]);

  return (
    <IconButton onClick={handleNextStep}>
      <ArrowForwardIcon />
    </IconButton>
  );
};

export const TourPrevButton = ({ ...props }) => {
  // eslint-disable-next-line react/prop-types
  const { setCurrentStep, currentStep } = props;

  const handlePrevStep = useCallback(() => {
    const nextStep = Number(currentStep) - 1;
    setCurrentStep(nextStep);
  }, [currentStep, setCurrentStep]);

  return (
    <IconButton onClick={handlePrevStep}>
      <ArrowBackIcon />
    </IconButton>
  );
};
