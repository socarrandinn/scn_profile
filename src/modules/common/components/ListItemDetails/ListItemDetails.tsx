import React, { memo, ReactNode } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

type ListItemDetailsProps = {
  primary: string | ReactNode;
  secondary: string;
  className?: string;
  alignItems?: string;
};

const ListItemDetails = ({ primary, secondary, className, alignItems }: ListItemDetailsProps) => {
  return (
    <ListItem alignItems='flex-start' disablePadding className={className}>
      <ListItemText
        sx={{ display: 'flex', alignItems: alignItems || 'center', gap: 1, margin: '3px 0' }}
        secondary={`${secondary}:`}
        primary={primary}
        primaryTypographyProps={{ order: 1, fontSize: 14, lineHeight: 1.5 }}
        secondaryTypographyProps={{ fontSize: 14, lineHeight: 1.5 }}
      />
    </ListItem>
  );
};

export default memo(ListItemDetails);
