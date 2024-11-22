import { ArrowForwardIosOutlined } from '@mui/icons-material';
import { memo } from 'react';
import { ExpandMore } from './styled';
type DrawerHiddenButtonProps = {
  open: boolean;
  onToggle?: () => void;
  left: number;
};

const DrawerHiddenButton = ({ open, onToggle, left }: DrawerHiddenButtonProps) => {
  return (
    <ExpandMore
      size='small'
      sx={{
        position: 'fixed',
        content: '""',
        top: 50,
        left: left - 15,
        zIndex: 1400,
      }}
      expand={open}
      onClick={onToggle}
    >
      <ArrowForwardIosOutlined fontSize='inherit' />
    </ExpandMore>
  );
};

export default memo(DrawerHiddenButton);
