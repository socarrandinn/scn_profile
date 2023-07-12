import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { HandlerError } from '@dfl/mui-react-common';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { useCategoryDetail } from 'modules/store/settings/category/context/CategoryDetailContext';
import { ImageCategory } from 'modules/store/settings/category/components/CategoryUpdateImage';

const CategoryDetail = () => {
  const { category, isLoading, error } = useCategoryDetail();

  if (isLoading) {
    return <SummaryWithAvatarSkeleton/>;
  }
  if (error) {
    return <HandlerError error={error}/>
  }

  return (
        <Stack p={2} pt={5} spacing={2}>
            <Stack direction='column' alignItems='center' spacing={0}>
                <ImageCategory category={category}/>
                <Typography variant={'h3'} mt={1}>
                    {category?.name}
                </Typography>
                <Typography variant={'body1'} mt={1}>
                    {category?.description}
                </Typography>
            </Stack>
        </Stack>
  );
};
export default memo(CategoryDetail);
