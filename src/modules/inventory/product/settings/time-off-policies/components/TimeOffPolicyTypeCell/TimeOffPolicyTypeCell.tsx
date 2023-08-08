import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type TimeOffPolicyTypeCellProps = {
  type?: string;
};

const TimeOffPolicyTypeCell = ({ type }: TimeOffPolicyTypeCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{type}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(TimeOffPolicyTypeCell);
