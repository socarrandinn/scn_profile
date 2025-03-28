import { InventoryOutlined } from '@mui/icons-material';
import { Box, Chip, ListItem, ListItemIcon, ListItemText, Stack, styled } from '@mui/material';
import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
interface CardItemProps {
  icon?: ReactNode;
  title: string;
  count: number;
  secondCount?: number;
  color: 'success' | 'error';
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

const CardContent = styled(Common)<{ bg: 'success' | 'error' }>(({ theme, bg }) => ({
  backgroundColor: theme.palette[bg].main,
  '& .MuiTypography-root': {
    color: theme.palette.background.paper,
  },
}));

const SubCardContent = styled(Common)<{ bg: 'success' | 'error' }>(({ theme, bg }) => ({
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
  const { icon, title, count, secondCount, color, variant } = props;
  const { t } = useTranslation('common');

  return (
    <ListItem>
      {showIcon && <ListItemIcon sx={{ minWidth: 35 }}>{icon || <InventoryOutlined />}</ListItemIcon>}
      <ListItemText
        sx={{ ml: showIcon ? 0 : 1 }}
        primary={title}
        secondary={
          <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
            {count}
            {secondCount !== undefined && (
              <Chip
                size='small'
                variant='outlined'
                label={`${t('added')}: ${secondCount}`}
                color='error'
                sx={{ padding: 0, height: 18, borderRadius: 1 }}
              />
            )}
          </Stack>
        }
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
