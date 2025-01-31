import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTranslation } from 'react-i18next';

type Props = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  steps: number;
};
const DotsStepper = ({ activeStep, setActiveStep, steps = 3 }: Props) => {
  const theme = useTheme();
  const { t } = useTranslation('common');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant='dots'
      steps={steps}
      position='static'
      activeStep={activeStep}
      sx={{
        maxWidth: 400,
        flexGrow: 1,
        mx: 'auto',
        backgroundColor: 'transparent',
        '.MuiMobileStepper-dots': { mx: 2 },
        '.MuiMobileStepper-dotActive': {
          width: 24,
          borderRadius: '4px',
        },
      }}
      nextButton={
        <Button size='small' onClick={handleNext} disabled={activeStep === steps}>
          {t('nextStep')}
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          {t('previousStep')}
        </Button>
      }
    />
  );
};

export default DotsStepper;
