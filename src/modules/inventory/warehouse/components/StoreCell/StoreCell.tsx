import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import { ReactLink } from '@dfl/react-security';

type StoreCellProps = {
  name: string;
  warehouseId: string;
};

const StoreCell = ({ name, warehouseId }: StoreCellProps) => {
  return (
    <ReactLink to={`/inventory/warehouses/${warehouseId}/general`} underline={'hover'}>
      <FlexBox alignItems={'center'} gap={1}>
        <Stack>
          <Typography>{name}</Typography>
        </Stack>
      </FlexBox>
    </ReactLink>
  );
};

export default memo(StoreCell);
