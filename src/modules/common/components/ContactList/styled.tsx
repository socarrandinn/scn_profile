import { List as MuiList, styled } from '@mui/material';

export const List = styled(MuiList)(({ theme }) => ({
  '& .MuiListItem-root': {
    padding: 0,
  },
}));
