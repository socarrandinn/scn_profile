import React, { memo } from 'react';
import { Typography } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';

type Props = ChildrenProps & {
  sx?: Record<string, any>;
};

const SubSectionTitle = ({ children, sx }: Props) => {
  return (
    <Typography color={'text.secondary'} variant={'subtitle2'} sx={sx}>
      {children}
    </Typography>
  );
};

export default memo(SubSectionTitle);
