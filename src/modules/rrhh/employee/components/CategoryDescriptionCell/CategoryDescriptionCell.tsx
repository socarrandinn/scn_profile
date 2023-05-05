import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';

type CategoryDescriptionCellProps = {
  description?: string;
};

const CategoryDescriptionCell = ({ description }: CategoryDescriptionCellProps) => {
  return (
    <FlexBox alignItems={'center'}>
      <Stack>
        <Typography>{description}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(CategoryDescriptionCell);
