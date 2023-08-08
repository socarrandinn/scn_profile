import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { IJobPosition } from 'modules/inventory/product/settings/job-position/interfaces';

type ProductCategoryCellProps = {
  position?: IJobPosition;
};

const ProductPositionCell = ({ position }: ProductCategoryCellProps) => {
  return (
        <FlexBox alignItems={'center'} gap={1}>
            <Stack>
                <Typography>{position?.name || ''}</Typography>
            </Stack>
        </FlexBox>
  );
};

export default memo(ProductPositionCell);
