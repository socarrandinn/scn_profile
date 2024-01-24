import DeleteButton from 'components/DeleteAction/DeleteButton';
import React from 'react';
import { useDeleteManyCategories } from '../../hooks/useDeleteManyCategories';

const CategoryBulkDeleteButton = () => {
  const { isLoading, mutate } = useDeleteManyCategories();

  return (
    <DeleteButton
      onDelete={() => {
        mutate();
      }}
      isLoading={isLoading}
      many
    />
  );
};

export default CategoryBulkDeleteButton;
