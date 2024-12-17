import { ArrowForwardIosOutlined } from '@mui/icons-material';
import { memo } from 'react';
import { ExpandMore } from './styled';
import { useMenuContext } from 'settings/main-menu/context/useMenuContext';
type DrawerHiddenButtonProps = {
  disabled?: boolean
  left: number;
};

const DrawerHiddenButton = ({ left, disabled }: DrawerHiddenButtonProps) => {
  const { isOpen, onToggle } = useMenuContext((state) => state);
  return (
    <ExpandMore
      size='small'
      sx={{
        position: 'fixed',
        content: '""',
        top: 50,
        left: left - 15,
        zIndex: 1201,
      }}
      expand={isOpen}
      onClick={onToggle}
      disabled={disabled}
    >
      <ArrowForwardIosOutlined fontSize='inherit' />
    </ExpandMore>
  );
};

export default memo(DrawerHiddenButton);
