import { styled, Tooltip as MuiTooltip, tooltipClasses, TooltipProps, Badge, BadgeProps, Stack } from '@mui/material';

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    padding: '16px 16px 16px 24px',
    borderRadius: 10,
    minWidth: 450,
    top: -8,
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      padding: '8px 8px 8px 16px',
      minWidth: '360px !important;',
      right: 8,
    },
  },
}));

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const Content = styled(Stack)(({ theme }) => ({
  padding: '8px 16px 8px 8px',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '5px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.grey[300],
    borderRadius: '4px',
  },
  maxHeight: 700,
  [theme.breakpoints.down('sm')]: {
    maxHeight: 500,
  },
}));
