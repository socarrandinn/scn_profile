import { Menu, MenuProps, styled } from '@mui/material'

export const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 5,
    minWidth: 200,
    marginTop: 4,
    boxShadow: '0px 0px 11.3px 5px rgba(43, 52, 69, 0.08)',
    '& .MuiMenu-list': {
      padding: '8px 0',
    },
    '& .MuiMenuItem-root': {
      '&:hover': {
        borderLeft: `5px solid ${theme.palette.primary.main}`,
        backgroundColor: '#F1F8EB',
      },
      '&:active': {
        backgroundColor: '#F1F8EB',
        borderLeft: `5px solid ${theme.palette.primary.main}`,
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));
