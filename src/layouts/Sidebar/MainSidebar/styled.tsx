import { styled, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export const RootMenuContent = styled(Stack)(({ theme }) => ({
  width: 50,
  height: '100vh',
  background: 'linear-gradient(134deg, #61B942 12.75%, #335F23 153.09%)',
  alignItems: 'center',
}));

export const MenuContent = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  padding: '50px 32px 32px 32px',
}));

export const RootMenuItem = styled(Link)(({ theme }) => ({
  width: 50,
  height: 50,
  textDecoration: 'none',
  color: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',

  '&:focus,&:hover, &.active': {
    position: 'relative',
    backgroundColor: '#FFFFFF20',
    ':before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 15,
      width: 20,
      height: 5,
      background: theme.palette.background.paper,
      transition: 'width 0.3s ease',
      borderRadius: 6,
    },
  },
}));
