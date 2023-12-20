import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ICategory } from '../../../product/interfaces/ICategory';
import { useFindAllCategories } from 'modules/inventory/settings/category/hooks/useFindCategories';

// Data value of the provider context
type CategoriesDataContextValue = {
  isLoading: boolean;
  data: ICategory[] | undefined;
  categoryMap?: Map<string, ICategory>;
  isError?: boolean;
  onClose: () => void;
  category?: ICategory;
  onOpen: (category: ICategory) => void;
  isOpen: boolean;
};
// default value of the context

// create context
const CategoriesDataContext = createContext<CategoriesDataContextValue>({
  isLoading: false,
  data: [],
  onClose: () => {},
  onOpen: (category) => {},
  isOpen: false,
});

// Proptypes of Provider component
type CategoriesDataContextProps = {
  children: any;
};

/**
 * Provider component
 * */
const CategoriesDataProvider = (props: CategoriesDataContextProps) => {
  const { data, isLoading, isError } = useFindAllCategories();
  const [category, setCategory] = useState<ICategory>();

  const onClose = useCallback(() => {
    setCategory(undefined);
  }, []);

  const onOpen = useCallback((category: ICategory) => {
    setCategory(category);
  }, []);

  const categoryMap = useMemo(() => {
    const map = new Map<string, ICategory>();
    data?.forEach((category: ICategory) => {
      map.set(category._id as string, category);
    });
    return map;
  }, [data]);

  return (
    <CategoriesDataContext.Provider
      value={{
        data,
        isLoading,
        categoryMap,
        isError,
        onClose,
        category,
        onOpen,
        isOpen: !!category,
      }}
      {...props}
    />
  );
};

// Default hooks to retrieve context data
const useCategoriesData = () => {
  const context = useContext(CategoriesDataContext);
  if (context === undefined) {
    throw new Error('You shoud be inside a CategoriesDataProvider ');
  }
  return context;
};

export { CategoriesDataProvider, useCategoriesData };
