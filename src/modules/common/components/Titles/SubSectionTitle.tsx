import React, { memo } from 'react'
import { Typography } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';

const SubSectionTitle = ({ children }: ChildrenProps) => {
  return (
        <Typography color={'text.secondary'} variant={'subtitle2'}>
            {children}
        </Typography>
  );
}

export default memo(SubSectionTitle);
