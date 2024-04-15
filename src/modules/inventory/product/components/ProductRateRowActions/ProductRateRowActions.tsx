import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { useDeleteRateProduct } from '../../hooks/useDeleteRateProduct';

type UserStatusProps = {
  rowId: string;
};

const ProductRateRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteRateProduct(rowId, onClose);

  return (
    <>
      <Stack direction='row' spacing={1} justifyContent={'center'}>
        {/*  <EditRowActions onClick={goTo} /> */}
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
        />
      </Stack>
    </>
  );
};

export default memo(ProductRateRowActions);
