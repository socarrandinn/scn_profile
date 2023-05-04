import React, { memo } from 'react';
import { GppGood } from '@mui/icons-material';
import { Badge } from '@mui/material';

type SystemRoleBadgeProps = {
  isSystemRole?: boolean;
  children: React.ReactNode;
};

const SystemRoleBadge = ({ isSystemRole, children }: SystemRoleBadgeProps) => (
  <Badge
    overlap='circular'
    badgeContent={<GppGood fontSize='small' color='error' />}
    variant='standard'
    invisible={!isSystemRole}
  >
    {children}
  </Badge>
);

export default memo(SystemRoleBadge);
