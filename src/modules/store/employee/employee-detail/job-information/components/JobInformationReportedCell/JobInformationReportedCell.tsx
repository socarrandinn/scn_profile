import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type JobInformationReportedCellProps = {
  reportedTo?: {
    name?: string;
  };
};

const JobInformationReportedCell = ({ reportedTo }: JobInformationReportedCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{reportedTo?.name}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(JobInformationReportedCell);
