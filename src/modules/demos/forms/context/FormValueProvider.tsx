import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

// Data value of the provider context
type ContextValue = {
  formData?: object,
  setFormData: Dispatch<SetStateAction<object | undefined>>
};

// default value of the context
const defaultValue: ContextValue = {
  setFormData: () => {}
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

  return <FormValueContext.Provider value={{ formData, setFormData }} {...props} />;
};

// Default hooks to retrieve context data
const useFormValue = () => {
  const context = useContext(FormValueContext);
  if (context === undefined) {
    throw new Error('You must be inside a FormValueProvider component');
  }

  const { formData, setFormData } = context;
  return {
    formData,
    setFormData,
  };
};

export { FormValueProvider, useFormValue };
