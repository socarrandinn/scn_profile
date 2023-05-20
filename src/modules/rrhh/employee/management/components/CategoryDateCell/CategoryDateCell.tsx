import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { format } from 'date-fns';

type CategoryDateCellProps = {
  createdAt?: Date;
};

const CategoryDateCell = ({ createdAt }: CategoryDateCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{createdAt ? format(new Date(createdAt), 'dd/MM/yyyy') : null}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(CategoryDateCell);
