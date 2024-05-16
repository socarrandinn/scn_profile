import { Skeleton, Stack } from '@mui/material';

const ReportCauseRadioGroupFormSkeleton = () => {
  return (
    <Stack gap={2}>
      {Array(8)
        .fill('')
        .map((sk) => (
          <Stack key={sk} direction={'row'} gap={1}>
            <Skeleton variant='circular' sx={{ height: 24, width: 24 }} />
            <Skeleton variant='text' width={'100%'} />
          </Stack>
        ))}
    </Stack>
  );
};

export default ReportCauseRadioGroupFormSkeleton;
