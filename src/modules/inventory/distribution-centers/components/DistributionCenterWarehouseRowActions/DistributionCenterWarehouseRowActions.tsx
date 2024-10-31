import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { useDeleteDistributionCenterWarehouse } from '../../hooks/useDeleteDistributionCenterWarehouse';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';

type Props = {
  rowId: string;
};

const DistributionCenterWarehouseRowActions = ({ rowId }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { distributionCenterId } = useDistributionCenterDetail();
  const { mutate, isLoading, error } = useDeleteDistributionCenterWarehouse(distributionCenterId, [rowId], onClose);

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

export default memo(DistributionCenterWarehouseRowActions);
