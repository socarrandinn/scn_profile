import { Timeline } from '@mui/lab';
import { Card, Chip, styled } from '@mui/material';

export const HistoryLine = styled(Timeline)(({ theme }) => ({
  '& .MuiTimelineItem-root': {
    ':before': {
      flex: 0,
      padding: 0,
    },
  },
  '& .MuiTimelineContent-root': {
    padding: '5px 10px',
    width: '100%',
  },
  '& .MuiTimelineDot-root': {
    padding: 0,
    margin: 2,
  },
  '& .MuiSvgIcon-root': {
    width: '1rem',
    height: '1rem',
  },
}));

export const ChipItem = styled(Chip)(() => ({
  borderRadius: 4,
  textTransform: 'uppercase',
  '& .MuiChip-label': {
    padding: '0 4px',
  },
  height: 20,
}));

export const ActivityCard = styled(Card)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: 'none',
  padding: '8px',
}));
