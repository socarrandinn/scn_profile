import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type CompensationChangeReasonCellProps = {
  reason?: string;
};

const JobInformationChangeReasonCell = ({ reason }: CompensationChangeReasonCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{reason}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(JobInformationChangeReasonCell);
