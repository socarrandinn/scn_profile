import { Drawer, IconButton, IconButtonProps, styled } from '@mui/material';

export const CustomDrawer = styled(Drawer)(({ theme, open }) => ({
  ...(open && {
    '.simplebar-content-wrapper': {
      background:
        theme.palette.mode === 'dark'
          ? `linear-gradient(178deg, ${theme.palette.background.default} 5%, ${theme.palette.primary.main}20 100%)`
          : 'linear-gradient(319deg, rgba(114,182,47,0.6) 0%, rgba(229,255,200,0.6) 20%, rgba(255,255,255,0)  30%)',

      position: 'relative',
      ':before': {
        position: 'absolute',
        content: '""',
        right: -150,
        top: 0,
        background: 'rgba(114,182,47,1)',
        height: 200,
        width: 200,
        filter: 'blur(100px)',
        borderRadius: '50%',
        opacity: 0.4,
        zIndex: -1,
        overflow: 'hidden',
      },
      ':after': {
        position: 'absolute',
        content: '""',
        left: -50,
        bottom: 100,
        background: 'radial-gradient(circle, rgba(114,182,47,1) 0%, rgba(246,160,26,1) 100%)',
        height: 100,
        width: 100,
        filter: 'blur(100px)',
        borderRadius: '50%',
        opacity: 0.4,
        zIndex: -1,
        overflow: 'hidden',
      },
    },
  }),
}));

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.grey[200],
  ':hover': {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.grey[300],
  },
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));
