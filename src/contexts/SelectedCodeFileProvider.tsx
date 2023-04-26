import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

// Data value of the provider context
type ContextValue = {
  path?: string,
  setPath: Dispatch<SetStateAction<string | undefined>>
};

// default value of the context
const defaultValue: ContextValue = {
  path: undefined,
  setPath: () => {}
};

// create context
const SelectedCodeFileContext = createContext<ContextValue>(defaultValue);

// Proptypes of Provider component
type ContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const SelectedCodeFileProvider = (props: ContextProps) => {
  const [path, setPath] = useState<string | undefined>(undefined);

  return <SelectedCodeFileContext.Provider value={{ path, setPath }} {...props} />;
};

// Default hooks to retrieve context data
const useSelectedCodeFile = () => {
  const context = useContext(SelectedCodeFileContext);
  if (context === undefined) {
    throw new Error('You must be inside a SelectedCodeFileProvider component');
  }

  const { path, setPath } = context;
  return {
    path,
    setPath,
  };
};

export { SelectedCodeFileProvider, useSelectedCodeFile };
