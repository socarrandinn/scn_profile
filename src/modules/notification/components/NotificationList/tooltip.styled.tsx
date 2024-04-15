import { styled, Tooltip as MuiTooltip, tooltipClasses, TooltipProps, Badge, BadgeProps } from '@mui/material';

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    padding: '24px 32px',
    borderRadius: 10,
    minWidth: 450,
    top: -8,
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      padding: '16px',
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
