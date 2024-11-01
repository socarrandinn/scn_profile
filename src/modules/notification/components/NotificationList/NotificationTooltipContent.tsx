import { Fragment, memo } from 'react';
import { StyledBadge, Tooltip } from './tooltip.styled';
import { ClickAwayListener, useMediaQuery, useTheme } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useToggle } from '@dfl/hook-utils';
import NotificationList from './NotificationList';
import { useFindNotifications } from 'modules/notification/hooks/useFindNotifications';
import { TableProvider } from '@dfl/mui-admin-layout';
import { IconButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

const NotificationTooltipContent = () => {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { data, isLoading } = useFindNotifications();
  const theme = useTheme();
  const isResp = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ClickAwayListener onClickAway={onClose}>
      <div>
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
          onClose={onClose}
          open={isOpen}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={
            <Fragment>
              <TableProvider id={'notifications'}>
                <NotificationList data={data?.data} isLoading={isLoading} total={data?.total} />
              </TableProvider>
            </Fragment>
          }
        >
          <IconButton tooltip={t('common:notification')} onClick={onOpen}>
            <StyledBadge badgeContent={data?.total} color='primary'>
              <NotificationsIcon
                sx={{
                  color: (theme) => (theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.grey[900]),
                }}
              />
            </StyledBadge>
          </IconButton>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default memo(NotificationTooltipContent);
