import { Badge, BadgeProps, styled } from '@mui/material';

export const ErrorStyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: 7,
    padding: '0px',
  },
}));
