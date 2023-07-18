import { createContext, useContext } from 'react';
import { useFormMemory } from 'modules/common/hooks/useFormMemory';
import { employeeInitValue } from 'modules/store/employee/management/constants/employee-init-value.constant';
import { IEmployeeCreate } from 'modules/store/employee/common/interfaces';
import { IProduct, IProductCreate } from 'modules/store/employee/common/interfaces/IProduct';

const initValue: IProductCreate = {
  name: '',
  code: '',
  brand: '',
  description: '',
};

// Data value of the provider context
type CreateEmployeeContextValue = {
  initValue: IProductCreate;
  reset: () => void;
};
// default value of the context
const defaultValue: CreateEmployeeContextValue = {
  initValue: initValue,
  reset: () => {},
};

// create context
const CreateEmployeeContext = createContext<CreateEmployeeContextValue>(defaultValue);

// Proptypes of Provider component
type CreateEmployeeContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const CreateEmployeeProvider = (props: CreateEmployeeContextProps) => {
  const { value, reset } = useFormMemory('formId', initValue);
  return (
    <CreateEmployeeContext.Provider
      value={{
        initValue: value,
        reset,
      }}
      {...props}
    />
  );
};

// Default hook to retrieve context data
const useCreateProduct = () => {
  const context = useContext(CreateEmployeeContext);
  if (context === undefined) {
    throw new Error('Yo must be inside a CreateEmployeeProvider');
  }
  return context;
};

export { CreateEmployeeProvider, useCreateProduct };
