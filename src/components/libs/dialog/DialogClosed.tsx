import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { memo } from 'react';
type Props = { onClose: VoidFunction };

const DialogClosed = ({ onClose }: Props) => {
  return (
    <IconButton
      aria-label='close'
      onClick={onClose}
      sx={{
        position: 'absolute',
        right: 8,
        top: 8,
      }}
    >
      <Close />
    </IconButton>
  );
};

export default memo(DialogClosed);
