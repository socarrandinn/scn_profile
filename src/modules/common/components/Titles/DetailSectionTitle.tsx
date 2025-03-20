import React, { memo } from 'react';
import { Typography } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';

const DetailSectionTitle = ({ children }: ChildrenProps) => {
  return (
    <Typography color={'text.secondary'} variant={'subtitle2'} textTransform={'uppercase'}>
      {children}
    </Typography>
  );
};

export default memo(DetailSectionTitle);
