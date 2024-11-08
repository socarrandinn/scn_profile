import { InventoryOutlined } from '@mui/icons-material';
import { Box, ListItem, ListItemIcon, ListItemText, Stack, styled } from '@mui/material';
import { memo, ReactNode } from 'react';
interface CardItemProps {
  icon?: ReactNode;
  title: string;
  count: number;
  color: 'primary' | 'error';
  variant?: 'outlined' | 'contained';
  action?: ReactNode;
}

const Common = styled(Stack)(() => ({
  position: 'relative',
  borderRadius: 10,
  height: 80,
  minWidth: 240,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
}));

const CardContent = styled(Common)<{ bg: 'primary' | 'error' }>(({ theme, bg }) => ({
  backgroundColor: theme.palette[bg].main,
  '& .MuiTypography-root': {
    color: theme.palette.background.paper,
  },
}));

const SubCardContent = styled(Common)<{ bg: 'primary' | 'error' }>(({ theme, bg }) => ({
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,

  flex: '1 1 45%',
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 8,
    height: '100%',
    borderRadius: 5,
    backgroundColor: theme.palette[bg].main,
  },
}));

const Action = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  bottom: 8,
  zIndex: 10,
}));

const CardItem = ({ ...props }: CardItemProps) => {
  const { color, variant = 'contained', action } = props;
  switch (variant) {
    case 'contained':
      return (
        <CardContent bg={color}>
          <ContentItem {...props} showIcon />
          <Action>{action}</Action>
        </CardContent>
      );
    case 'outlined':
      return (
        <SubCardContent bg={color}>
          <ContentItem {...props} />
          <Action>{action}</Action>
        </SubCardContent>
      );
  }
};

export default memo(CardItem);

const ContentItem = ({ showIcon, action, ...props }: { showIcon?: boolean } & CardItemProps) => {
  const { icon, title, count, color, variant } = props;
  return (
    <ListItem>
      {showIcon && <ListItemIcon sx={{ minWidth: 35 }}>{icon || <InventoryOutlined />}</ListItemIcon>}
      <ListItemText
        sx={{ ml: showIcon ? 0 : 1 }}
        primary={title}
        secondary={count}
        secondaryTypographyProps={{
          fontWeight: 600,
          fontSize: 20,
          lineHeight: 1,
          ...(variant === 'outlined' && { color: `${color}.main` }),
        }}
      />
    </ListItem>
  );
};
