import { Drawer, IconButton, IconButtonProps, styled } from '@mui/material';

export const CustomDrawer = styled(Drawer)<{ lg?: boolean }>(({ theme, lg = false, open }) => ({
  ...(open && {
    '.simplebar-content-wrapper': {
      position: 'relative',
      ':before': {
        position: 'absolute',
        content: '""',
        right: '10%',
        top: 0,
        background: 'rgba(114,182,47,1)',
        height: 200,
        width: 200,
        filter: 'blur(100px)',
        borderRadius: '50%',
        opacity: 0.3,
      },
      ':after': {
        position: 'absolute',
        content: '""',
        right: -50,
        bottom: -100,
        background: 'radial-gradient(circle, rgba(114,182,47,1) 0%, rgba(246,160,26,1) 100%)',
        height: 300,
        width: 200,
        filter: 'blur(100px)',
        borderRadius: '50%',
        opacity: 0.3,
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
  backgroundColor: theme.palette.grey[200],
  ':hover': {
    backgroundColor: theme.palette.grey[300],
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
