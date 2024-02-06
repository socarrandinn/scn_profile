import DeleteButton from 'components/DeleteAction/DeleteButton';
import React, { memo, useCallback } from 'react';
import { useDeleteManyLogistics } from 'modules/inventory/provider/logistics/hooks/useDeleteManyLogistics';

const CategoryBulkDeleteButton = () => {
  const { isLoading, mutate } = useDeleteManyLogistics();

  const onDelete = useCallback(() => {
    mutate();
  }, [mutate]);

  return <DeleteButton onDelete={onDelete} isLoading={isLoading} many />;
};

export default memo(CategoryBulkDeleteButton);
