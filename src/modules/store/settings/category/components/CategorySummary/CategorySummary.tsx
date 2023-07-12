import { memo } from 'react';
import { Divider, Stack } from '@mui/material';
import { CategoryDetail } from 'modules/store/settings/category/components/CategoryDetail';

const CategorySummary = () => {
  return (
    <Stack
      direction={'column'}
      divider={<Divider orientation='horizontal' light />}
      spacing={0}
      sx={{ paddingBottom: 1 }}
    >
      <CategoryDetail />
    </Stack>
  );
};

export default memo(CategorySummary);
