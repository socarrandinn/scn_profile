import { FlexBox } from '@dfl/mui-react-common';
import { Avatar, styled, Typography } from '@mui/material';

export const Content = styled(FlexBox)(({ theme }) => ({
  gap: 20,
  minHeight: 80,
  padding: '15px 20px',
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: 10,
  justifyContent: 'start',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    '& .MuiTypography-root': {
      color: theme.palette.background.paper,
    },
    '& .MuiAvatar-root': {
      backgroundColor: 'none',
      color: theme.palette.background.paper,
    },
  },
}));

export const ContentIcon = styled(Avatar)(({ theme }) => ({
  width: 50,
  height: 50,
  backgroundColor: theme.palette.primary.main,
  '& .MuiSvgIcon-root': {
    fontSize: 30,
  },
}));

export const ContentText = styled(FlexBox)(() => ({
  flexDirection: 'column',
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: 15,
}));

export const SubTitle = styled(Typography)(() => ({
  color: '#000',
  fontSize: 13,
}));
