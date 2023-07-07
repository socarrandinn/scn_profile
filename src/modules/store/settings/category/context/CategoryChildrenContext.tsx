import { ICategory } from 'modules/store/settings/category/interfaces/ICategory';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useFindCategories } from '../hooks/useFindCategories';
import { useParams } from 'react-router';

type CategoryDataType = { data: ICategory[]; total: number };
// Data value of the provider context
type CategoryContextValue = {
  categories?: CategoryDataType;
  isLoading: boolean;
  setCategories?: Dispatch<SetStateAction<CategoryDataType | undefined>>;
  error?: any;
};
// default value of the context
const defaultValue: CategoryContextValue = {
  isLoading: true,
};

// create context
const CategoryChildrenContext = createContext<CategoryContextValue>(defaultValue);

// Proptypes of Provider component
type CategoryContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const CategoryChildrenProvider = (props: CategoryContextProps) => {
  const { id } = useParams();

  const { isLoading, data, error } = useFindCategories(id ?? undefined);

  const [categories, setCategories] = useState<CategoryDataType>();

  useEffect(() => {
    if (data) {
      console.log(data);
      setCategories(data);
    }
  }, [data, setCategories]);

  return <CategoryChildrenContext.Provider value={{ categories, setCategories, isLoading, error }} {...props} />;
};

// Default hooks to retrieve context data
const useCategoryChildren = () => {
  const context = useContext(CategoryChildrenContext);
  if (context === undefined) {
    throw new Error('You must be inside a CategoryChildrenProvider component');
  }
  return context;
};

export { CategoryChildrenProvider, useCategoryChildren };
