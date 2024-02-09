import { Paper, Skeleton, Stack } from '@mui/material';
import { memo } from 'react';
import { Timeline, TimelineItem } from './styled';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from '@mui/lab';

const AuditLogHistoryChangeSkeleton = () => {
  return (
    <Timeline>
      {Array(5)
        .fill('')
        .map((sk) => (
          <TimelineItem key={sk}>
            <TimelineSeparator>
              <TimelineDot variant='filled' color='primary' />
              <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper sx={{ padding: 2 }}>
                <Stack gap={{ md: 1 }} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>
                  <Skeleton variant='text' width={'70%'} />
                  <Skeleton variant='text' width={'25%'} />
                </Stack>
                <Skeleton variant='text' width={'100%'} />
                <Skeleton variant='rectangular' width={'100%'} sx={{ maxWidth: 150, borderRadius: 8, mt: 1 }} />
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
};

export default memo(AuditLogHistoryChangeSkeleton);
