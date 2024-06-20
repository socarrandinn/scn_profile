import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { USER_INVITE_STATUS_PENDING } from '../../constants/user-invite-status';

type UserInviteStatusPickerProps = {
  value: IStatus;
  userId: string;
  statusColor?: string;
  isLoading?: boolean;
  isError?: boolean;
  readOnly?: boolean;
};

const UserInviteStatusPicker = ({ value, userId, readOnly = false }: UserInviteStatusPickerProps) => {
  const { t } = useTranslation('usersInvite');
  return (
    <StatusPicker
      readOnly={readOnly}
      options={USER_INVITE_STATUS_PENDING.map((option) => ({ ...option, title: t(option.title) }))}
      name='active'
      size={'small'}
      value={{ ...value, title: t(value?.title) }}
      // isLoading={loadingChange}
      onChange={() => 'void'}
    />
  );
};

export default memo(UserInviteStatusPicker);
