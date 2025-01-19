import { memo } from 'react';
import { Stack } from '@mui/material';
import UserInvitationResend from './UserInvitationResend';
import UserInvitationCancel from './UserInvitationCancel';
import { IUserInvite } from '../../interfaces/IUserInvite';

type Props = {
  data: IUserInvite;
};

const UserInvitationRowActions = ({ data }: Props) => {
  return (
    <Stack spacing={0.5} direction={'row'} alignItems={'center'}>
      <UserInvitationResend data={data} />
      <UserInvitationCancel data={data} />
    </Stack>
  );
};

export default memo(UserInvitationRowActions);
