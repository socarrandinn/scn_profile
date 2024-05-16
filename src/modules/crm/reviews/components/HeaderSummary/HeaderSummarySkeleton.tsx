import { Skeleton, Stack } from '@mui/material';
import { PagePaperLayout } from 'layouts/index';
import { memo } from 'react';

const HeaderSummaryTabsSkeleton = () => {
  return (
    <PagePaperLayout>
      <Stack gap={2} flexDirection={{ xs: 'column', md: 'row' }} width={'100%'}>
        <Skeleton
          variant='rectangular'
          sx={{
            width: { xs: 100, md: 150 },
            height: { xs: 100, md: 150 },
            aspectRatio: '4/3',
            borderRadius: 4,
          }}
        />
        <Stack gap={1} overflow={'hidden'}>
          <Skeleton variant='text' sx={{ maxWidth: 300, width: '100%' }} />
          <Skeleton variant='text' sx={{ maxWidth: 400, width: '100%' }} />
          <Stack gap={1} flexDirection='row'>
            {Array(3)
              .fill('')
              .map((a, index) => (
                <Skeleton key={index} variant='rectangular' height={35} sx={{ width: 100 }} />
              ))}
          </Stack>
          <Stack gap={1} flexDirection='row'>
            {Array(6)
              .fill('')
              .map((a, index) => (
                <Skeleton key={index} variant='rectangular' height={35} sx={{ width: 150 }} />
              ))}
          </Stack>
        </Stack>
      </Stack>
    </PagePaperLayout>
  );
};

export default memo(HeaderSummaryTabsSkeleton);
