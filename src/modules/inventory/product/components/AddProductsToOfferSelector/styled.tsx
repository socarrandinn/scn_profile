import { styled } from '@mui/material/styles';
import { ChildrenProps } from '@dfl/mui-react-common';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Paper } from '@mui/material';

const ContainerWrapper = ({ isOpen, ...props }: ChildrenProps & { isOpen: boolean }) => <div {...props} />;

export const SubMenu = styled(ContainerWrapper)(({ isOpen }) => ({
  position: 'absolute',
  right: '100%',
  left: 'auto',
  top: 0,
  paddingLeft: 10,
  zIndex: 999999999,
  minWidth: 220,
  ...(isOpen
    ? {
        display: 'block',
      }
    : {
        display: 'none',
      }),
  '>.MuiPaper-root': {
    padding: '0px',
  },
}));

export const StyledMenuItem = styled(MenuItem)(() => ({
  position: 'static',
  padding: '0',
  '>div': {
    padding: '6px 16px',
    width: '100%',
  },
}));

export const StyledPaperShadow = styled(Paper)(() => ({
  boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
}));
