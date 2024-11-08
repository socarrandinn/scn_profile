import { Avatar, Box, Paper, Stack, styled } from '@mui/material';

export const DropzoneWrapper = styled(Box)<{ isEmptyImages: boolean; isDragActive: boolean }>(
  ({ theme, isEmptyImages, isDragActive }) => ({
    position: 'relative',
    borderRadius: 10,
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(1),
    marginTop: 8,
    textAlign: 'center',
    cursor: isEmptyImages ? 'pointer' : 'default',
    border: `2px dashed ${theme.palette.grey[300]}`,

    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
    ...(isDragActive
      ? {
          ':after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 10,
            border: `2px dashed ${theme.palette.primary.main}`,
            pointerEvents: 'none',
            boxSizing: 'border-box',
            zIndex: 1,
          },
        }
      : {}),
  }),
);

export const ThumbnailWrapper = styled(Paper)(() => ({
  position: 'relative',
  borderRadius: 7,
  height: 120,
  width: '100%',
  cursor: 'pointer',
}));

export const Thumbnail = styled(Avatar)<{ isDrop?: boolean }>(({ theme, isDrop }) => ({
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  borderRadius: 10,
  color: theme.palette.primary.main,
  img: {
    objectFit: 'cover !important',
  },
}));

export const Actions = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: 8,
  [theme.breakpoints.down('sm')]: {
    gap: 4,
  },
}));

export const AbsoluteActions = styled(Actions)(({ theme }) => ({
  position: 'absolute',
  top: 15,
  right: 15,
}));

export const Drop = styled(Stack)(({ theme }) => ({
  padding: 4,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));
