import { useTranslation } from 'react-i18next';
import { H1, HandlerError, PageLoader, ConditionContainer } from '@dfl/mui-react-common';
import { LOGIN_ERRORS } from 'modules/authentication/constants';
import { useVerify } from '@dfl/react-security';
import { ResendVerifyLinkForm } from 'modules/authentication/components/ResendVerifyLinkForm';

type VerifyProps = {
  verifyKey: string;
  admin: boolean;
};

function Verify ({ verifyKey, admin = true }: VerifyProps) {
  const { t } = useTranslation('authentication');
  const { error, isError } = useVerify({
    key: verifyKey,
    admin,
  });

  return (
    <div>
      <div className={'flex items-center justify-center flex-col mb-8'}>
        {!isError && <PageLoader size={60} />}
        <H1 textAlign={'center'}>{t(!isError ? 'confirmation.loading' : 'confirmation.title')}</H1>
      </div>
      <HandlerError error={error} errors={LOGIN_ERRORS} />
      <ConditionContainer active={!!error}>
        <ResendVerifyLinkForm />
      </ConditionContainer>
    </div>
  );
}

export default Verify;
