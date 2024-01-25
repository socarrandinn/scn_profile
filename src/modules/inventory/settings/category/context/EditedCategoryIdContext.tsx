import { createContext, useContext } from 'react';

// Data value of the provider context
type EditedCategoryIdContextValue = {
  categoryId: string;
};
// default value of the context
const defaultValue: EditedCategoryIdContextValue = {
  categoryId: '',
};

// create context
const EditedCategoryIdContext = createContext<EditedCategoryIdContextValue>(defaultValue);

// Proptypes of Provider component
type EditedCategoryIdContextProps = {
  children: any;
  categoryId: string;
};

/**
 * Provider component
 * */
const EditedCategoryIdProvider = ({ categoryId, children }: EditedCategoryIdContextProps) => {
  return <EditedCategoryIdContext.Provider value={{ categoryId }}>{children}</EditedCategoryIdContext.Provider>;
};

// Default hooks to retrieve context data
const useEditedCategoryId = (): EditedCategoryIdContextValue => {
  const context = useContext(EditedCategoryIdContext);
  if (context === undefined) {
    throw new Error('You must be inside a  EditedCategoryIdContextProvider component');
  }
  return context;
};

export { EditedCategoryIdProvider, useEditedCategoryId };
