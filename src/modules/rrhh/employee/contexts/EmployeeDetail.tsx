import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useFindOneEmployee } from '../hooks/useFindOneEmployee';
import { useParams } from 'react-router';
import { IEmployee } from 'modules/rrhh/employee/interfaces';

// Data value of the provider context
type EmployeeContextValue = {
  employee?: IEmployee;
  setEmployee?: Dispatch<SetStateAction<IEmployee | undefined>>;
  isLoading: boolean;
  error?: any;
};
// default value of the context
const defaultValue: EmployeeContextValue = {
  isLoading: true,
};

// create context
const EmployeeContext = createContext<EmployeeContextValue>(defaultValue);

// Proptypes of Provider component
type EmployeeContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const EmployeeDetailProvider = (props: EmployeeContextProps) => {
  const { id } = useParams();

  const { isLoading, data, error } = useFindOneEmployee(id ?? null);

  const [employee, setEmployee] = useState<IEmployee>();

  useEffect(() => {
    if (data) {
      setEmployee(data);
    }
  }, [data, setEmployee]);

  return <EmployeeContext.Provider value={{ employee, setEmployee, isLoading, error }} {...props} />;
};

// Default hooks to retrieve context data
const useEmployeeDetail = () => {
  const context = useContext(EmployeeContext);
  if (context === undefined) {
    throw new Error('You must be inside a UserDetailProvider component');
  }
  return context;
};

export { EmployeeDetailProvider, useEmployeeDetail };
