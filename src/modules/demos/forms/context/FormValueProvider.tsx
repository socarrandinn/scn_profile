import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

// Data value of the provider context
type ContextValue = {
  formData?: object;
  setFormData: Dispatch<SetStateAction<object | undefined>>;
  isErrorData?: boolean;
  setIsErrorData: Dispatch<SetStateAction<boolean | undefined>>;
};

// default value of the context
const defaultValue: ContextValue = {
  setFormData: () => {},
  setIsErrorData: () => {},
};

// create context
const FormValueContext = createContext<ContextValue>(defaultValue);

// Proptypes of Provider component
type ContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const FormValueProvider = (props: ContextProps) => {
  const [formData, setFormData] = useState<object | undefined>(defaultValue);
  const [isErrorData, setIsErrorData] = useState<boolean | undefined>(false);

  return <FormValueContext.Provider value={{ formData, setFormData, isErrorData, setIsErrorData }} {...props} />;
};

// Default hooks to retrieve context data
const useFormValue = () => {
  const context = useContext(FormValueContext);
  if (context === undefined) {
    throw new Error('You must be inside a FormValueProvider component');
  }

  const { formData, setFormData, isErrorData, setIsErrorData } = context;

  return {
    formData,
    setFormData,
    isErrorData,
    setIsErrorData,
  };
};

export { FormValueProvider, useFormValue };
