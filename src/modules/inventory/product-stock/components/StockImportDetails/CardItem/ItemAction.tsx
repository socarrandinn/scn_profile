import { ArrowOutward } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const ItemAction = ({ onOpen, color }: { onOpen: () => void; color: 'primary' | 'error' }) => {
  return (
    <IconButton
      onClick={() => {
        onOpen();
      }}
      size='small'
    >
      <ArrowOutward color={color} fontSize='small' sx={{ transform: 'rotate(90deg)' }} />
    </IconButton>
  );
};
