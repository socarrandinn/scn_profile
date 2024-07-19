import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import { memo } from 'react';

type CheckViewProps = {
  check: boolean;
  color?: 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
};

const CheckView = ({ check = false, color = 'primary' }: CheckViewProps) => {
  if (check) {
    return <CheckBox color={color} />;
  }
  return <CheckBoxOutlineBlank color={color} />;
};

export default memo(CheckView);
