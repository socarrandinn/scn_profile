import { useTranslation } from 'react-i18next';
import { H1, HandlerError, PageLoader } from '@dfl/mui-react-common';
import useInvitationAcceptance from 'modules/authentication/hooks/useInvitationAcceptance';
import { INVITATION_ERRORS } from 'modules/authentication/constants';

type VerifyProps = {
  verifyKey: string;
  admin: boolean;
};

function InvitationAcceptanceContainer ({ verifyKey, admin = true }: VerifyProps) {
  const { t } = useTranslation('usersInvite');
  const { error, isError } = useInvitationAcceptance({
    key: verifyKey,
    admin,
  });

  return (
    <div>
      <div className={'flex items-center justify-center flex-col mb-8'}>
        {!isError && <PageLoader size={60} />}
        <H1 textAlign={'center'}>{t(!isError ? 'acceptance.loading' : 'acceptance.title')}</H1>
      </div>
      <HandlerError error={error} errors={INVITATION_ERRORS} />
    </div>
  );
}

export default InvitationAcceptanceContainer;
