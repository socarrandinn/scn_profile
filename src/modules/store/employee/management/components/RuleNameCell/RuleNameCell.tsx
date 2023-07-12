import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type RuleNameCellProps = {
  name?: string;
};

const RuleNameCell = ({ name }: RuleNameCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{name}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(RuleNameCell);
