import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import React, { memo, useCallback } from 'react';
import { useDeleteManyCategories } from '../../hooks/useDeleteManyCategories';

const CategoryBulkDeleteButton = () => {
  const { isLoading, mutate } = useDeleteManyCategories();

  const onDelete = useCallback(() => {
    mutate();
  }, [mutate]);

  return <DeleteButton onDelete={onDelete} isLoading={isLoading} many />;
};

export default memo(CategoryBulkDeleteButton);
