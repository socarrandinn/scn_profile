import { ICategory } from 'modules/inventory/settings/category/interfaces/ICategory';
import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { useFindOneCategory } from '../hooks/useFindOneCategory';
import { useParams } from 'react-router';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';

// Data value of the provider context
type CategoryContextValue = {
  category?: ICategory;
  isLoading: boolean;
  setCategory?: Dispatch<SetStateAction<ICategory | undefined>>;
  error?: any;
  categoryId?: string;
};
// default value of the context
const defaultValue: CategoryContextValue = {
  isLoading: true,
};

// create context
const CategoryContext = createContext<CategoryContextValue>(defaultValue);

// Proptypes of Provider component
type CategoryContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const CategoryDetailProvider = (props: CategoryContextProps) => {
  const { id } = useParams();

  const { isLoading, data: category, error } = useFindOneCategory(id ?? null);

  useBreadcrumbName(category?._id || '', category?.name, isLoading);

  return <CategoryContext.Provider value={{ category, isLoading, error, categoryId: id }} {...props} />;
};

// Default hooks to retrieve context data
const useCategoryDetail = (): CategoryContextValue => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    return { isLoading: false } satisfies CategoryContextValue;
  }
  return context;
};

export { CategoryDetailProvider, useCategoryDetail };
