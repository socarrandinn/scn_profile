import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type CategoryNameCellProps = {
  name?: string;
  category?: {
    icon?: string;
    name?: string;
    _id?: string;
  };
};

const CategoryNameCell = ({ category }: CategoryNameCellProps) => {
  console.log('CategoryNameCell', category);
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{category?.name}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(CategoryNameCell);
