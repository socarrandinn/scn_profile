import { FlexBox } from '@dfl/mui-react-common';
import { TourNextButton, TourPrevButton } from './TourButtons';
import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useTourContext } from 'contexts/TourProvider';
import { useTranslation } from 'react-i18next';

const TourNavigation = (props: any) => {
  const { t } = useTranslation('tour');
  const { steps, currentStep, setCurrentStep, setIsOpen } = props;
  const { stepsGroup } = useTourContext();

  const handleDotClick = (index: number) => {
    setCurrentStep(index);
    // todo : saveSeenStep
  };

  const handleCompletedTour = useCallback(() => {
    const updatedSteps = steps.map((step: any) => step._id);
    localStorage.setItem(stepsGroup, JSON.stringify(updatedSteps));

    setIsOpen(false);
  }, [setIsOpen, steps, stepsGroup]);

  return (
    <>
      <FlexBox sx={{ gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
        <TourPrevButton {...props} />

        <FlexBox sx={{ gap: '5px', justifyContent: 'center', alignItems: 'center' }}>
          {steps.map((_: any, index: number) => (
            <span
              key={index}
              onClick={() => {
                handleDotClick(index);
              }}
              style={{
                width: 10,
                height: 10,
                backgroundColor: currentStep === index ? '#65BE46' : '#ccc',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            />
          ))}
        </FlexBox>

        <TourNextButton {...props} />
      </FlexBox>

      <div className='text-right mt-[10px] mr-3'>
        <Button variant='outlined' color='primary' size='small' onClick={handleCompletedTour}>
          {t('finish')}
        </Button>
      </div>
    </>
  );
};
export default TourNavigation;
