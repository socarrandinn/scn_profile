import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ConditionContainer, H1, HandlerError, PageLoader } from '@dfl/mui-react-common';
import { LOGIN_ERRORS } from 'modules/authentication/constants';
import { DFLError, useVerifyPasswordReset } from '@dfl/react-security';
import { RecoveryFinishForm } from 'modules/authentication/components/RecoveryFinishForm';

type ResetPasswordProps = {
  verifyKey: string;
};

const useMapError = (error: DFLError) =>
  useMemo(() => {
    if (!error) return null;
    if (error?.networkError) return error;
    return {
      reference: LOGIN_ERRORS.RESET_PASSWORD_INVALID_LINK.reference,
    };
  }, [error]);

function ResetPasswordContainer({ verifyKey }: ResetPasswordProps) {
  const { t } = useTranslation('authentication');
  const { error, isLoading, isSuccess } = useVerifyPasswordReset(verifyKey);
  const mappedError = useMapError(error as DFLError);

  return (
    <div>
      <div className={'flex items-center justify-center flex-col'}>
        {isLoading && <PageLoader size={60} />}
        <H1 textAlign={'center'}>{t(isLoading ? 'resetPasswordLoading' : 'newPasswordTitle')}</H1>
      </div>
      <HandlerError error={mappedError} errors={LOGIN_ERRORS} />
      <ConditionContainer active={!isLoading}>
        <RecoveryFinishForm disable={!isSuccess} verifyKey={verifyKey} />
      </ConditionContainer>
    </div>
  );
}

export default ResetPasswordContainer;
