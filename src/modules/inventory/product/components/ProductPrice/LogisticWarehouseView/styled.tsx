import { styled, Tooltip as MuiTooltip, tooltipClasses, TooltipProps } from '@mui/material';

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  '.MuiTooltip-arrow': {
    color: theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.background.paper,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    padding: 0,
    borderRadius: '10px',
    minWidth: 400,
    top: -8,
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      padding: 0,
      minWidth: '340px !important;',
      right: 8,
    },
  },
}));
