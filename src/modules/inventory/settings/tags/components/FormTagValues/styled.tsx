import { styled, Chip } from '@mui/material';

export const TagChip = styled(Chip)(({ size }) => ({
  borderRadius: 10,
  ...(size === 'small'
    ? {
        padding: '18px 8px',
      }
    : { padding: '24px 16px' }),
}));
