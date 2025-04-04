import { createContext, useContext } from 'react';
import { useParams } from 'react-router';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { IPage } from '../interfaces';
import { useFindOnePage } from '../hooks/useFindOnePage';

// Data value of the provider context
type PageContextValue = {
  page?: IPage;
  isLoading: boolean;
  error?: any;
};

// default value of the context
const defaultValue: PageContextValue = {
  isLoading: true,
};

// create context
const PageContext = createContext<PageContextValue>(defaultValue);

// Proptypes of Provider component
type PageContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const PageDetailsProvider = (props: PageContextProps) => {
  const { id } = useParams();
  const { isLoading, data, error } = useFindOnePage(id ?? null);

  useBreadcrumbName(data?._id || '', data?.seo?.name, isLoading);

  return <PageContext.Provider value={{ page: data, isLoading, error }} {...props} />;
};

// Default hooks to retrieve context data
const usePageDetails = (): PageContextValue => {
  const context = useContext(PageContext);
  if (context === undefined) {
    return { isLoading: false } satisfies PageContextValue;
  }
  return context;
};

export { PageDetailsProvider, usePageDetails };
