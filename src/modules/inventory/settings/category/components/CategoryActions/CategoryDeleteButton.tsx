import { memo } from 'react';
import { useCategoryDetail } from '../../context/CategoryDetailContext';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useDeleteCategory } from '../../hooks/useDeleteCategory';
import { DELETE_CATEGORY_ERRORS } from '../../constants/category-errors';

const CategoryDeleteButton = () => {
  const { categoryId } = useCategoryDetail();
  const { mutate, isLoading, error } = useDeleteCategory(categoryId as string, () => 'void', true);
  return <DeleteButton isLoading={isLoading} onDelete={mutate} error={error} errors={DELETE_CATEGORY_ERRORS} />;
};

export default memo(CategoryDeleteButton);
