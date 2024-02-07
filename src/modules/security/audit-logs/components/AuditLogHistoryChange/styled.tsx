import { Timeline as MuiTimeline, TimelineItem as MuiTimelineItem } from '@mui/lab';
import { Paper, styled } from '@mui/material';

export const Timeline = styled(MuiTimeline)(({ theme }) => ({
  padding: 0,
  '& .MuiTimelineItem-root': {
    ':before': {
      flex: 0,
      padding: 0,
    },
  },
}));

export const TimelineItem = styled(MuiTimelineItem)(({ theme }) => ({}));

export const TimelineContentPaper = styled(Paper)<{ active: boolean }>(({ theme, active }) => ({
  padding: '8px 8px 8px 12px',
  boxShadow: '6px 6px 20px #4646461F;',
  borderRadius: 6,
  border: `2px solid ${theme.palette.background.paper}`,
  ':hover': {
    border: `2px solid ${theme.palette.primary.main}`,
    cursor: 'pointer',
  },
  ...(active && { border: `2px solid ${theme.palette.primary.main}` }),
}));

Timeline.defaultProps = {
  position: 'right',
};
