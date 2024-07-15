import DeleteButton from 'components/DeleteAction/DeleteButton';
import React, { memo, useCallback } from 'react';
import { useDeleteManyStockReductionCauses } from '../../hooks/useDeleteManyStockReductionCauses';

const StockReductionCauseDeleteButton = () => {
  const { isLoading, mutate } = useDeleteManyStockReductionCauses();

  const onDelete = useCallback(() => {
    mutate();
  }, [mutate]);

  return <DeleteButton onDelete={onDelete} isLoading={isLoading} many />;
};

export default memo(StockReductionCauseDeleteButton);
