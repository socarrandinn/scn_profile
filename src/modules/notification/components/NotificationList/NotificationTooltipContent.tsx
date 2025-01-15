import { memo } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useToggle } from '@dfl/hook-utils';
import NotificationList from './NotificationList';
import { TableProvider } from '@dfl/mui-admin-layout';
import { IconButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { StyledBadge, Tooltip } from './tooltip.styled';

const NotificationTooltipContent = () => {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useToggle(false);
  const theme = useTheme();
  const isResp = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Tooltip
      sx={{
        '.MuiTooltip-arrow': {
          color: theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.background.paper,
        },
      }}
      PopperProps={{
        disablePortal: true,
      }}
      placement={isResp ? 'bottom' : 'bottom-start'}
      arrow
      onClose={onClose}
      open={isOpen}
      disableHoverListener
      disableTouchListener
      title={
        <TableProvider id='notifications'>
          <NotificationList data={[]} isLoading={false} total={0} />
        </TableProvider>
      }
    >
      <div>
        <IconButton tooltip={t('common:notification')} onClick={onOpen}>
          <StyledBadge badgeContent={[]} color='primary' invisible={true}>
            <NotificationsIcon
              sx={{
                color: theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.grey[900],
              }}
            />
          </StyledBadge>
        </IconButton>
      </div>
    </Tooltip>
  );
};

export default memo(NotificationTooltipContent);
