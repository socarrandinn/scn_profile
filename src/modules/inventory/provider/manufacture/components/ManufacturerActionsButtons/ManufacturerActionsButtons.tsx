import { IManufacture } from '../../interfaces';
import { Box } from '@mui/material';
import ManufactureStatePicker from 'modules/inventory/provider/manufacture/components/ManufactureStatePicker/ManufactureState';
import EditManufactureAction from '../EditManufactureAction/EditManufactureAction';
import DeleteManufactureAction from '../DeleteManufactureAction/DeleteManufactureAction';
import { memo } from 'react';

interface IActions {
  manufacture: IManufacture | undefined;
}

const ManufacturerActionsButtons = ({ manufacture }: IActions) => {
  return (
    <Box gap={1} display={'flex'} alignItems={'center'}>
      <EditManufactureAction />
      <ManufactureStatePicker value={manufacture?.state || false} rowId={manufacture?._id || ''} button />
      <DeleteManufactureAction />
    </Box>
  );
};

export default memo(ManufacturerActionsButtons);
