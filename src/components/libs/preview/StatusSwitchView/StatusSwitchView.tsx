import { styled, Switch } from '@mui/material';
import { memo } from 'react';

const ReadOnlySwitch = styled(Switch)(({ theme }) => ({
  pointerEvents: 'none',
  cursor: 'default',
}));

type StatusSwitchViewProps = {
  status: boolean;
  title?: string;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
};

const StatusSwitchView = ({ status = false, color = 'primary', title }: StatusSwitchViewProps) => {
  return <ReadOnlySwitch readOnly color={color} title={title} value={status} />;
};

export default memo(StatusSwitchView);
