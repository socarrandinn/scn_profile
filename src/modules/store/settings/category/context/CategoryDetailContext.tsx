import { ICategory } from 'modules/store/settings/category/interfaces/ICategory';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useFindOneCategory} from '../hooks/useFindOneCategory';
import { useParams } from 'react-router';

// Data value of the provider context
type CategoryContextValue = {
  category?: ICategory;
  isLoading: boolean;
  setCategory?: Dispatch<SetStateAction<ICategory | undefined>>;
  error?: any;
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

  const { isLoading, data, error } = useFindOneCategory(id ?? null);

  const [category, setCategory] = useState<ICategory>();

  useEffect(() => {
    if (data) {
      setCategory(data);
    }
  }, [data, setCategory]);

  return <CategoryContext.Provider value={{ category, setCategory, isLoading, error }} {...props} />;
};

// Default hooks to retrieve context data
const useCategoryDetail = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('You must be inside a CategoryDetailProvider component');
  }
  return context;
};

export { CategoryDetailProvider, useCategoryDetail };
