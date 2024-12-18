import { styled, Stack, Box, Theme } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const RootMenuContent = styled(Stack)(({ theme }) => ({
  width: 50,
  height: '100%',
  flex: 1,
  minHeight: '100vh',
  background:
    theme.palette.mode === 'dark'
      ? `linear-gradient(134deg, ${theme.palette.primary.light} 12.75%, ${theme.palette.background.default} 153.09%)`
      : 'linear-gradient(134deg, #61B942 12.75%, #335F23 153.09%)',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    height: '100%',
    paddingBottom: 8,
  },
  paddingBottom: 24,
}));

export const MenuTitule = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: '50px 16px 24px 32px',
  '& .MuiTypography-root': {
    fontSize: 20,
    fontWeight: 500,
  },
}));
export const MenuContent = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '0 8px 40px 0',
  flexGrow: 1,
  '& .MuiButton-root': {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ' & .MuiListSubheader-root': {
    marginLeft: 24,
  },
  '& .MuiListItem-root, & ': {
    padding: '0 8px',
  },
}));

const commonLinkStyle = (theme: Theme) => ({
  position: 'relative',
  backgroundColor: '#FFFFFF20',
  ':before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 15,
    width: 20,
    height: 5,
    background: theme.palette.common.white,
    transition: 'width 0.3s ease',
    borderRadius: 6,
  },
});

export const RootMenuItem = styled(NavLink)(({ theme }) => ({
  width: 50,
  height: 50,
  textDecoration: 'none',
  color: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',

  '&:focus, &:hover, &.active': {
    ...commonLinkStyle(theme),
  },
}));
