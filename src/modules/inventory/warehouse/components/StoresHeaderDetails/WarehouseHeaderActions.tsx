import { Box } from '@mui/material';
import { WAREHOUSE_PERMISSIONS } from '../../constants';
import { PermissionCheck } from '@dfl/react-security';
import { StoreDeleteButton, StoreEditButton } from '../StoreDetailActions';
import { StoreVisiblePicker } from '../StoreVisiblePicker';
import { memo } from 'react';

type ActionsProps = {
  visible?: boolean;
  id: string;
};

const WarehouseActions = ({ visible, id }: ActionsProps) => {
  return (
    <Box gap={1} display={'flex'}>
      <PermissionCheck permissions={WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE}>
        <StoreEditButton />
        <StoreDeleteButton />
      </PermissionCheck>
      <StoreVisiblePicker value={visible} rowId={id} button />
    </Box>
  );
};

export default memo(WarehouseActions);

