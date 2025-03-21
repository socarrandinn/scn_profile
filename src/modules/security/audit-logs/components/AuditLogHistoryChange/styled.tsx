import { Timeline as MuiTimeline, TimelineItem as MuiTimelineItem } from '@mui/lab';
import { Paper, PaperProps, styled } from '@mui/material';

export const Timeline = styled(MuiTimeline)(() => ({
  padding: 0,
  '& .MuiTimelineItem-root': {
    ':before': {
      flex: 0,
      padding: 0,
    },
  },
}));

export const TimelineItem = styled(MuiTimelineItem)(() => ({}));

export const TimelineContentPaper = styled(Paper)(({ theme }) => ({
  padding: '8px 8px 8px 12px',
  borderRadius: 6,
  border: `2px solid ${theme.palette.background.paper}`,
  ':hover': {
    border: `2px solid ${theme.palette.primary.main}`,
    cursor: 'pointer',
  },
}));

export const sxFormPaper: PaperProps = {
  sx: {
    padding: '16px 20px',
  },
};
