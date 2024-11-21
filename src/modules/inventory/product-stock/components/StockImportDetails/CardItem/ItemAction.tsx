import { ArrowOutward } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const ItemAction = ({
  onOpen,
  color,
  disabled,
}: {
  onOpen: () => void;
  color: 'primary' | 'error';
  disabled?: boolean;
}) => {
  return (
    <IconButton
      disabled={disabled}
      onClick={() => {
        onOpen();
      }}
      size='small'
    >
      <ArrowOutward color={color} fontSize='small' sx={{ transform: 'rotate(90deg)' }} />
    </IconButton>
  );
};
