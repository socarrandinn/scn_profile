import React, { memo } from 'react';
import { SentState } from 'modules/authentication/components/SentState';

type RecoveryPasswordSentProps = {
  email: string;
  reset: () => void;
  isLoading: boolean;
};
const RecoveryPasswordSent = ({ email, reset, isLoading }: RecoveryPasswordSentProps) => {
  return (
    <SentState
      message='authentication:recovery.sentSubtext'
      buttonText='newLink'
      action={reset}
      isLoading={isLoading}
      email={email}
      error={null}
    />
  );
};

export default memo(RecoveryPasswordSent);
