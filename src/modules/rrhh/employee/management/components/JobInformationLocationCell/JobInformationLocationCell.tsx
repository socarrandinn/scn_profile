import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type JobInformationLocationCellProps = {
  location?: {
    name?: string;
  };
};

const JobInformationLocationCell = ({ location }: JobInformationLocationCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{location?.name}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(JobInformationLocationCell);
