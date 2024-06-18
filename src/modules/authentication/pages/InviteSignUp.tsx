import { memo } from 'react';
import { H1 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import InviteSignUpContainer from '../container/InviteSignUpContainer';
import { useParams } from 'react-router';
import { UserInviteProvider } from '../contexts/UserInvite';

const InviteSignUp = () => {
  const { t } = useTranslation('authentication');
  const { key: inviteCode } = useParams();
  return (
    <UserInviteProvider inviteCode={inviteCode as string}>
      <H1 textAlign={'center'}>{t('signupTitle')}</H1>
      <InviteSignUpContainer />
    </UserInviteProvider>
  );
};

export default memo(InviteSignUp);
