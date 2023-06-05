import { memo, useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoadingButton } from '@dfl/mui-react-common';
import { Popover, Button, Box, Alert } from '@mui/material';
import UserDevicesService from 'modules/security/users/services/user-devices.service';
import { USER_DEVICES } from 'modules/security/users/constants/queries';
import AlarmIcon from '@mui/icons-material/Alarm';

type CloseSessionUserDeviceProps = {
  hash: string;
  ip: string;
  userId?: string;
};
const CloseSessionUserDevice = ({ hash, ip, userId }: CloseSessionUserDeviceProps) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { mutate, isLoading } = useMutation<any, any, any>(async () => {
    await UserDevicesService.logout(userId, {
      ip,
      hash,
    });
    queryClient.resetQueries([USER_DEVICES]).then();
  });

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button aria-describedby={id} onClick={handleClick}>
        {t('devices.logout')}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ padding: '0.8rem' }}>
          <Box sx={{ mb: 2, mt: 1, maxWidth: '270px' }}>
            <Alert severity='warning'>{t('devices.aboutCloseSection')}</Alert>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 2,
              mb: 1,
            }}
          >
            <Button variant='outlined' onClick={handleClose}>
              {t('devices.cancel')}
            </Button>

            <LoadingButton
              variant='contained'
              color='error'
              loading={isLoading}
              onClick={mutate}
              startIcon={<AlarmIcon />}
            >
              {t('devices.logout')}
            </LoadingButton>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default memo(CloseSessionUserDevice);
