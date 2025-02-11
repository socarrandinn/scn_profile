import { Chip } from '@mui/material';

export const ElementSizeChip = ({ size }: { size: number }) => {
  return (
    <Chip
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        borderRadius: '4px',
      }}
      label={size}
    />
  );
};
