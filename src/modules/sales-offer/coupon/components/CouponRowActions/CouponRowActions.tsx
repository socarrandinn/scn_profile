import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { useDeleteCoupon } from '../../hooks/useDeleteCoupon';

type UserStatusProps = {
  rowId: string;
};

const CouponRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteCoupon(rowId, onClose);
  return (
    <>
      <Stack direction='row' spacing={1}>
        {/*  <EditRowActions onClick={handleEdit} /> */}
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

export default memo(CouponRowActions);
