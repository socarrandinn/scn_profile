import { memo } from 'react';
import AuthAppLayout from './layout/AuthAppLayout';
import { InvitationAcceptance } from 'modules/authentication/pages';

const InvitationApp = () => {
  return (
    <AuthAppLayout>
      <InvitationAcceptance />
    </AuthAppLayout>
  );
};

export default memo(InvitationApp);
