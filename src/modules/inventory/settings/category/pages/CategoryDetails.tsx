import { memo } from 'react';
import CategoryDetailContainer from '../containers/CategoryDetailContainer';
import { CategoryDetailProvider } from '../context/CategoryDetailContext';

const CategoryDetails = () => {
  return (
    <CategoryDetailProvider>
      <CategoryDetailContainer />
    </CategoryDetailProvider>
  );
};

export default memo(CategoryDetails);
