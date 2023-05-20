import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type JobInformationPositionCellProps = {
  position?: {
    name?: string;
  };
};

const JobInformationPositionCell = ({ position }: JobInformationPositionCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{position?.name}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(JobInformationPositionCell);
