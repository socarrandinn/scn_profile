import { createContext, useContext } from 'react';

type DistributioncentersContextValue = {
  distributionCenterId: string;
};

// default value of the context
const defaultValue: DistributioncentersContextValue = {
  distributionCenterId: '',
};

// create context
const DistributioncentersContext = createContext<DistributioncentersContextValue>(defaultValue);

// Proptypes of Provider component
type DistributioncentersContextProps = {
  children: React.ReactNode;
  distributionCenterId: string;
};

const DistributioncentersContextProvider = ({ children, distributionCenterId }: DistributioncentersContextProps) => {
  return <DistributioncentersContext.Provider value={{ distributionCenterId }}>{children}</DistributioncentersContext.Provider>;
};

const useDistributioncentersContext = () => {
  const context = useContext(DistributioncentersContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { useDistributioncentersContext, DistributioncentersContextProvider };
