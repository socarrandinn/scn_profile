import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteOffer } from 'modules/sales-offer/offer/hooks/useDeleteOffer';
import { DeleteRowAction } from '@dfl/mui-admin-layout';

type UserStatusProps = {
  rowId: string;
};

const OfferRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteOffer(rowId, onClose);
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

export default memo(OfferRowActions);
