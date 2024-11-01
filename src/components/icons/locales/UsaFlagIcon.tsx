import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent as Icon } from 'assets/flags/usa-flag.svg';

export const UsaFlagIcon = (props: SvgIconProps) => {
  return <SvgIcon {...props} component={Icon} inheritViewBox />;
};
