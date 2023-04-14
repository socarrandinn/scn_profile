import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoadingButton } from '@dfl/mui-react-common';
import UserDevicesService from 'modules/security/users/services/user-devices.service';
import { USER_DEVICES } from 'modules/security/users/constants/queries';

type CloseSessionUserDeviceProps = {
  hash: string;
  ip: string;
  userId?: string;
};
const CloseSessionUserDevice = ({ hash, ip, userId }: CloseSessionUserDeviceProps) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation<any, any, any>(async () => {
    await UserDevicesService.logout(userId, {
      ip,
      hash,
    });
    queryClient.resetQueries([USER_DEVICES]).then();
  });

  return (
    <LoadingButton sx={{ paddingRight: 0 }} loading={isLoading} onClick={mutate}>
      {t('devices.logout')}
    </LoadingButton>
  );
};

export default memo(CloseSessionUserDevice);
