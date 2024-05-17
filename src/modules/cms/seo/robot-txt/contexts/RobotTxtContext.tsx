import { Dispatch, SetStateAction, createContext, useCallback, useContext } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useSearchParams } from 'react-router-dom';
import { useFindRobotTxts } from '../hooks/useFindRobotTxts';
import { IAuditLogEntity } from 'modules/security/audit-logs/interfaces';
// Data value of the provider context
type RobotTxtContextValue = {
  data?: {
    data: IAuditLogEntity[];
    total: number;
  };
  isLoading?: boolean;
  error?: any;
  checkRobotTxt?: string | null;
  setCheckRobotTxt?: Dispatch<SetStateAction<string>>;
  handleCloseRobotTxt?: () => void;
};
// default value of the context
const defaultValue: RobotTxtContextValue = {};

// create context
const RobotTxtContext = createContext<RobotTxtContextValue>(defaultValue);

// Proptypes of Provider component
type RobotTxtContextProps = ChildrenProps & {
  children: any;
};

/**
 * Provider component
 * */
const RobotTxtProvider = ({ ...props }: RobotTxtContextProps) => {
  const { data, isLoading, error } = useFindRobotTxts();
  const [searchParams, setSearchParams] = useSearchParams();
  const checkRobotTxt = searchParams.get('entity');

  const handleCloseRobotTxt = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.entity;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return <RobotTxtContext.Provider value={{ data, isLoading, error, checkRobotTxt, handleCloseRobotTxt }} {...props} />;
};

// Default hook to retrieve context data
const useRobotTxtContext = () => {
  const context = useContext(RobotTxtContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { RobotTxtProvider, useRobotTxtContext };
