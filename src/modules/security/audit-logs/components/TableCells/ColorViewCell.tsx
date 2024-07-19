import { Box, Chip } from '@mui/material';
import { memo } from 'react';

type ColorViewCellProps = {
  color: string;
};

const ColorViewCell = ({ color }: ColorViewCellProps) => {
  return (
    <Chip
      label={color}
      icon={<Box sx={{ borderRadius: 0.5, height: 18, width: 18, backgroundColor: color ?? '#000' }} />}
    />
  );
};

export default memo(ColorViewCell);
