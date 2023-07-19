import { memo } from 'react';
import { useParams } from 'react-router-dom';
import CategoryList from 'modules/store/settings/category/pages/CategoryList';

const SubCategoriesContainer = () => {
  const { id } = useParams();

  return <CategoryList parent={id} />;
};

export default memo(SubCategoriesContainer);
