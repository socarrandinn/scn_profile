import { createContext, useContext } from 'react';
import { useFormMemory } from 'modules/common/hooks/useFormMemory';
import { IProductCreate } from 'modules/store/product/interfaces/IProduct';
import { productInitValue } from '../constants/product-init-value.constant';

// Data value of the provider context
type CreateProductContextValue = {
  initValue: IProductCreate;
  reset: () => void;
};
// default value of the context
const defaultValue: CreateProductContextValue = {
  initValue: productInitValue,
  reset: () => {},
};

// create context
const CreateProductContext = createContext<CreateProductContextValue>(defaultValue);

// Proptypes of Provider component
type CreateProductContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const CreateProductProvider = (props: CreateProductContextProps) => {
  const { value, reset } = useFormMemory('formId', productInitValue);
  return (
    <CreateProductContext.Provider
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
  const context = useContext(CreateProductContext);
  if (context === undefined) {
    throw new Error('Yo must be inside a CreateProductProvider');
  }
  return context;
};

export { CreateProductProvider, useCreateProduct };
