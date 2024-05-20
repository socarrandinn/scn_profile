import { styled, Table } from '@mui/material';

export const MuiTableCommon = styled(Table)(({ theme }) => ({
  '& .MuiTableCell-root': {
    border: 0,
    ':last-child': {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    ':first-child': {
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
  },
  ' & .MuiTableRow-head': {
    '& .MuiTableCell-root': {
      padding: '8px 16px',
      fontSize: 14,
      fontWeight: 'normal',
    },
  },

  '.spacing:last-child': {
    display: 'none',
  },
  '.body': {
    borderSpacing: 0,
  },
}));

export const MuiTableRow = styled(MuiTableCommon)(({ theme }) => ({
  '.row': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    '& .MuiTableCell-root': {
      padding: '16px 16px',
      [theme.breakpoints.down('sm')]: {
        padding: 10,
      },
    },
    ':hover': {
      boxShadow: theme.shadows[1],
      cursor: 'pointer',
    },
  },
}));

export const MuiTable = styled(MuiTableRow)(({ theme }) => ({
  '& .MuiTableCell-root': {
    border: 0,
    ':last-child': {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    ':first-child': {
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
  },
  ' & .MuiTableRow-head': {
    '& .MuiTableCell-root': {
      padding: '8px 16px',
      fontSize: 14,
      fontWeight: 'normal',
    },
  },

  '.spacing:last-child': {
    display: 'none',
  },
  '.body': {
    borderSpacing: 0,
  },
}));

export const MuiTableProduct = styled(MuiTableCommon)(({ theme }) => ({
  '& .MuiTableRow-head': {
    '.MuiTableCell-root': {
      fontWeight: 600,
      ':first-child': {
        paddingLeft: 0,
      },
      ':last-child': {
        paddingRight: 0,
      },
    },
  },
  '.row': {
    borderBottom: `1px solid ${theme.palette.divider}`,
    ':last-child': {
      borderBottom: 0,
    },

    '& .MuiTableCell-root': {
      ':first-child': {
        paddingLeft: 0,
      },
      ':last-child': {
        paddingRight: 0,
      },
    },
  },
}));
