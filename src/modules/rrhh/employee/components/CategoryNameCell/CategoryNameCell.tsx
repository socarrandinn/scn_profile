import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type CategoryNameCellProps = {
  name?: string;
};

const CategoryNameCell = ({ name }: CategoryNameCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{name}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(CategoryNameCell);
