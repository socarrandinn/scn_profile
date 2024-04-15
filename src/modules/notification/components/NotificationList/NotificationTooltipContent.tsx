import { Fragment, memo } from 'react';
import { StyledBadge, Tooltip } from './tooltip.styled';
import { ClickAwayListener, IconButton, useMediaQuery, useTheme } from '@mui/material';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

import { useToggle } from '@dfl/hook-utils';
import NotificationList from './NotificationList';
import { useFindNotifications } from 'modules/notification/hooks/useFindNotifications';

const NotificationTooltipContent = () => {
  const { isOpen, onToggle } = useToggle(false);
  const { data, isLoading } = useFindNotifications();
  const theme = useTheme();
  const isResp = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ClickAwayListener onClickAway={onToggle}>
      <Tooltip
        sx={{
          '.MuiTooltip-arrow': {
            color: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.background.paper,
          },
        }}
        PopperProps={{
          disablePortal: true,
        }}
        placement={isResp ? 'bottom' : 'bottom-start'}
        arrow
        onClose={onToggle}
        open={isOpen}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={
          <Fragment>
            <NotificationList data={data?.data} isLoading={isLoading} total={data?.total} />
          </Fragment>
        }
      >
        <IconButton onClick={onToggle}>
          <StyledBadge badgeContent={data?.total} color='primary'>
            <NotificationsActiveOutlinedIcon className='notificationBell' />
          </StyledBadge>
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
};

export default memo(NotificationTooltipContent);
