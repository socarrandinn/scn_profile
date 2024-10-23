import { createContext, useContext } from 'react';

type DistributionCentersContextValue = {
  distributionCenterId: string;
};

// default value of the context
const defaultValue: DistributionCentersContextValue = {
  distributionCenterId: '',
};

// create context
const DistributionCentersContext = createContext<DistributionCentersContextValue>(defaultValue);

// Proptypes of Provider component
type DistributionCentersContextProps = {
  children: React.ReactNode;
  distributionCenterId: string;
};

const DistributionCentersContextProvider = ({ children, distributionCenterId }: DistributionCentersContextProps) => {
  return <DistributionCentersContext.Provider value={{ distributionCenterId }}>{children}</DistributionCentersContext.Provider>;
};

const useDistributionCentersContext = () => {
  const context = useContext(DistributionCentersContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { useDistributionCentersContext, DistributionCentersContextProvider };
