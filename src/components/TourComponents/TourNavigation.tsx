import { FlexBox } from '@dfl/mui-react-common';
import { TourNextButton, TourPrevButton } from './TourButtons';

const TourNavigation = (props: any) => {
  const { steps, currentStep, setCurrentStep } = props;

  const handleDotClick = (index: number) => {
    setCurrentStep(index);
    // todo : saveSeenStep
  };

  return (
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
  );
};
export default TourNavigation;
