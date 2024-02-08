import { styled, Stack, Avatar, Paper } from '@mui/material';

export const Section = styled(Paper)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  marginTop: 24,
  display: 'flex',
  flexDirection: 'row',
  minHeight: 214,
  width: '100%',
  gap: 32,
  padding: '32px 32px 0 32px',
  [theme.breakpoints.down('sm')]: {
    marginTop: 16,
    padding: '16px 16px 0 16px',
    gap: 16,
    flexDirection: 'column',
  },
}));

export const ImageContent = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  aspectRatio: '4/3',
  backgroundColor: theme.palette.grey[400],
  border: `1px solid ${theme.palette.grey[400]}`,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    width: 100,
    height: 100,
    margin: '0 auto',
  },
  '& .MuiSvgIcon-root': {
    fontSize: 60,
  },
}));

export const Content = styled(Stack)(({ theme }) => ({
  gap: 16,
  width: '100%',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    gap: 8,
  },
}));
