import { TourNextButton, TourPrevButton } from './TourButtons';

const TourNavigation = (props: any) => {
  const { steps, currentStep, setCurrentStep } = props;
  //   const { stepsGroup } = useTourContext();

  const handleDotClick = (index: number) => {
    setCurrentStep(index);
    // tourService.saveSeenStep(currentStep, stepsGroup);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      <TourPrevButton {...props} />

      <div style={{ display: 'flex', gap: '5px' }}>
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
      </div>

      <TourNextButton {...props} />
    </div>
  );
};
export default TourNavigation;
