import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type CompensationValueCellProps = {
  value?: number;
};

const CompensationValueCell = ({ value }: CompensationValueCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>${value || '0.00'}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(CompensationValueCell);
