import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useFindOneEmployee } from '../../../management/hooks/useFindOneEmployee';
import { useParams } from 'react-router';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { IEmployee, IEmployeeUpdate } from 'modules/store/employee/common/interfaces';
import { useUser } from '@dfl/react-security';

// Data value of the provider context
type EmployeeContextValue = {
  employee?: IEmployeeUpdate | IEmployee;
  setEmployee?: Dispatch<SetStateAction<IEmployeeUpdate | IEmployee | undefined>>;
  isLoading: boolean;
  isMe: boolean;
  error?: any;
  id: string;
};
// default value of the context
const defaultValue: EmployeeContextValue = {
  isLoading: true,
  id: '',
  isMe: false,
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
  const { user } = useUser();
  const employeeId: string = id || user?._id;
  const isMe = !id;
  const { isLoading, data, error } = useFindOneEmployee(employeeId ?? null);
  useBreadcrumbName(data?._id || '', data?.general?.firstName, isLoading);

  const [employee, setEmployee] = useState<IEmployeeUpdate | IEmployee>();

  useEffect(() => {
    if (data) {
      setEmployee(data);
    }
  }, [data, setEmployee]);

  return <EmployeeContext.Provider
        value={{ id: employeeId, isMe, employee, setEmployee, isLoading, error }} {...props} />;
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
