import { memo } from 'react';
import { useCategoryDetail } from '../../context/CategoryDetailContext';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useDeleteCategory } from '../../hooks/useDeleteCategory';

const CategoryDeleteButton = () => {
  const { categoryId } = useCategoryDetail();
  const { mutate, isLoading } = useDeleteCategory(categoryId as string, () => 'void', true);
  return <DeleteButton isLoading={isLoading} onDelete={mutate} />;
};

export default memo(CategoryDeleteButton);
