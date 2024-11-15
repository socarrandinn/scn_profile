import { InventoryOutlined } from '@mui/icons-material';
import { Box, Stack, styled, Typography } from '@mui/material';
import { memo, ReactNode } from 'react';
interface CardItemProps {
  icon?: ReactNode;
  title: string;
  count: number;
  color: 'primary' | 'error';
  action?: ReactNode;
  variant?: 'outlined' | 'contained';
}

const Common = styled(Stack)(() => ({
  position: 'relative',
  borderRadius: 10,
  height: 100,
  width: 140,
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
  '& .MuiSvgIcon-root': {
    color: theme.palette.background.paper,
  },
}));

const SubCardContent = styled(Common)<{ bg: 'primary' | 'error' }>(({ theme, bg }) => ({
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,
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
  const { icon, title, count } = props;
  return (
    <Stack gap={1} justifyContent={'center'} alignItems={'center'}>
      {showIcon && <>{icon || <InventoryOutlined />}</>}
      <Stack justifyContent={'center'} alignItems={'center'}>
        <Typography>{title}</Typography>
        <Typography
          variant='h1'
          sx={{
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          {count}
        </Typography>
      </Stack>
    </Stack>
  );
};
