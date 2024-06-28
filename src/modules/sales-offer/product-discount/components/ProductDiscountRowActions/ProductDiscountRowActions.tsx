import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { Stack } from '@mui/material';
import { useDeleteProductDiscount } from 'modules/sales-offer/product-discount/hooks/useDeleteProductDiscount';
import { memo } from 'react';

type UserStatusProps = {
  rowId: string;
};

const ProductDiscountRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteProductDiscount(rowId, onClose);
  return (
    <>
      <Stack direction='row' spacing={1}>
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

export default memo(ProductDiscountRowActions);
