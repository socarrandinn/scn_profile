import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as Icon } from 'assets/flags/spain-flag.svg';

export const SpainFlagIcon = (props: SvgIconProps) => {
  return <SvgIcon {...props} component={Icon} inheritViewBox />;
};
