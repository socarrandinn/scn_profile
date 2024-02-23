import { FlexBox } from '@dfl/mui-react-common';
import { styled, Typography } from '@mui/material';
import { GRAY } from 'settings/theme';

export const Content = styled(FlexBox)<{ ringColor: string }>(({ ringColor }) => ({
  position: 'relative',
  overflow: 'hidden',
  gap: 20,
  height: '165px',
  padding: '15px 20px',
  borderRadius: 10,
  justifyContent: 'start',
  boxShadow: '6px 3px 20px #4646461F',
  '&:hover': {
    outline: `2px solid ${ringColor}`,
    boxShadow: '9px 10px 40px #4646461F',
  },
}));

export const ContentText = styled(FlexBox)(() => ({
  flexDirection: 'column',
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600,
  fontSize: 15,
}));

export const SubTitle = styled(Typography)(() => ({
  color: GRAY,
  fontSize: 12,
}));
