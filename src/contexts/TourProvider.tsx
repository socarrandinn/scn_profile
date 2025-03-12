import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import tourService, { StepsGroup } from 'services/tour-service';
import { TourProvider } from '@reactour/tour';
import TourCloseButton from 'components/TourComponents/TourClose';
import TourNavigation from 'components/TourComponents/TourNavigation';

interface TourContextType {
  stepsGroup: StepsGroup;
  setStepsGroup: (group: StepsGroup) => void;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

export const TourProviderCustom = ({ children }: { children: ReactNode }) => {
  const [stepsGroup, setStepsGroup] = useState<StepsGroup>(StepsGroup.mainLayout);

  const handleTourClose = useCallback(
    (event: any) => {
      // todo send seen steps to server
      tourService.sendSeenSteps(stepsGroup);
      event?.setIsOpen(false);
    },
    [stepsGroup],
  );

  return (
    <TourContext.Provider
      value={{
        stepsGroup,
        setStepsGroup,
      }}
    >
      <TourProvider
        components={{
          Close: (props) => <TourCloseButton {...props} />,
          Navigation: TourNavigation,
        }}
        onClickMask={(event) => {
          handleTourClose(event);
        }}
        steps={[]}
        // nextButton={TourNextButton}
        // prevButton={TourPrevButton}
        styles={{
          popover: (base) => ({
            ...base,
            '--reactour-accent': '#65BE46',
            borderRadius: 10,
            marginTop: 25,
            marginLeft: 20,
          }),
        }}
      >
        {children}
      </TourProvider>
    </TourContext.Provider>
  );
};

export const useTourContext = (): TourContextType => {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error('useTourContext debe usarse dentro de un TourProvider');
  }
  return context;
};

export default TourContext;
