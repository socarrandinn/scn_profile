import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTourContext } from 'contexts/TourProvider';
import tourService from 'services/tour-service';

interface TourButtonProps {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  currentStep: number;
}

export const TourNextButton = ({ setCurrentStep, currentStep }: TourButtonProps) => {
  const { stepsGroup } = useTourContext();

  const handleNextStep = useCallback(() => {
    setCurrentStep((prev: number) => prev + 1);
    tourService.saveSeenStep(currentStep, stepsGroup);
  }, [currentStep, setCurrentStep, stepsGroup]);

  return (
    <IconButton onClick={handleNextStep}>
      <ArrowForwardIcon />
    </IconButton>
  );
};

export const TourPrevButton = ({ setCurrentStep, currentStep }: TourButtonProps) => {
  const handlePrevStep = useCallback(() => {
    setCurrentStep((prev: number) => prev - 1);
  }, [setCurrentStep]);

  return (
    <IconButton onClick={handlePrevStep}>
      <ArrowBackIcon />
    </IconButton>
  );
};
