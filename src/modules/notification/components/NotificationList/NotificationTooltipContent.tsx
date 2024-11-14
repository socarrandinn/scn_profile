import { Fragment, memo, useRef } from 'react';
import { StyledBadge, Tooltip } from './tooltip.styled';
import { useMediaQuery, useTheme } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useToggle } from '@dfl/hook-utils';
import NotificationList from './NotificationList';
import { TableProvider } from '@dfl/mui-admin-layout';
import { IconButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

const NotificationTooltipContent = () => {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useToggle(false);
  const theme = useTheme();
  const isResp = useMediaQuery(theme.breakpoints.down('sm'));
  const tooltipRef = useRef();

  return (
    <Tooltip
      ref={tooltipRef}
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
      disableHoverListener
      disableTouchListener
      title={
        <Fragment>
          <TableProvider id={'notifications'}>
            <NotificationList
              data={[] /* data?.data */}
              isLoading={false /* isLoading */}
              total={0 /* data?.total */}
            />
          </TableProvider>
        </Fragment>
      }
    >
      <IconButton tooltip={t('common:notification')} onClick={onOpen}>
        <StyledBadge badgeContent={[] /* data?.total */} color='primary' invisible={true /* !data?.total */}>
          <NotificationsIcon
            sx={{
              color: (theme) => (theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.grey[900]),
            }}
          />
        </StyledBadge>
      </IconButton>
    </Tooltip>
  );
};

export default memo(NotificationTooltipContent);
