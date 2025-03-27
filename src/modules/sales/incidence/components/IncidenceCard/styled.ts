import { Badge, BadgeProps, styled } from '@mui/material';

export const ErrorStyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: 7,
    padding: '0px',
    minWidth: '16px',
    height: '16px',
    fontWeight: 300,
    fontSize: '11px',
  },
}));
