import { Timeline as MuiTimeline, TimelineItem as MuiTimelineItem } from '@mui/lab';
import { Paper, PaperProps, styled } from '@mui/material';

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

export const sxFormPaper: PaperProps = {
  sx: {
    height: '100%',
    minHeight: { xs: '100%', md: 500 },
    padding: '28px 20px',
  },
};
