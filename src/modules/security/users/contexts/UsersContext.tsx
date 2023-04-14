import { createContext, useContext, useMemo } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { useFindUsersTable } from '../hooks/useFindUsersTable';
import { ICategory } from '../interfaces/ICategory';

// Data value of the provider context
type UsersDataContextValue = UseQueryResult<Map<string, ICategory>, unknown> | undefined;
// default value of the context

// create context
const UsersDataContext = createContext<UsersDataContextValue>(undefined);

// Proptypes of Provider component
type UsersDataContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const UsersDataProvider = (props: UsersDataContextProps) => {
  const query = useFindUsersTable();
  return <UsersDataContext.Provider value={{ ...query }} {...props} />;
};

// Default hook to retrieve context data
const useUsersData = () => {
  const context = useContext(UsersDataContext);
  if (context === undefined) {
    throw new Error('You shoud be inside a UsersDataProvider ');
  }
  return context;
};

// Default hook to retrieve context data
const useUsersDataList = () => {
  const context = useContext(UsersDataContext);
  if (context === undefined) {
    throw new Error('You shoud be inside a UsersDataProvider ');
  }
  const data: ICategory[] = useMemo(() => {
    const data: ICategory[] = [];
    if (!context.data) {
      return [];
    }
    // @ts-ignore
    context.data.data.forEach((value) => data.push(value));
    return data;
  }, [context.data]);

  return {
    ...context,
    map: context.data,
    data,
  };
};
// Default hook to retrieve context data
const useUsersDataFilter = () => {
  const context = useContext(UsersDataContext);
  if (context === undefined) {
    throw new Error('You shoud be inside a UsersDataProvider ');
  }
  const data: any[] = useMemo(() => {
    const data: any[] = [];
    if (!context.data) {
      return [];
    }
    // @ts-ignore
    context.data.data.forEach((value) =>
      data.push({
        value: value._id,
        label: value.fullName,
      }),
    );
    return data;
  }, [context.data]);

  return {
    ...context,
    map: context.data,
    data,
  };
};

export { UsersDataProvider, useUsersData, useUsersDataList, useUsersDataFilter };
