import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type TimeOffPolicyNameCellProps = {
  name?: string;
};

const TimeOffPolicyNameCell = ({ name }: TimeOffPolicyNameCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{name}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(TimeOffPolicyNameCell);
