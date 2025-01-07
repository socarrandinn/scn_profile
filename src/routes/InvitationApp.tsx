import { memo } from 'react';
import AuthAppLayout from './layout/AuthAppLayout';
import { Verify } from 'modules/authentication/pages';

const InvitationApp = () => {
  return (
    <AuthAppLayout>
      <Verify />
    </AuthAppLayout>
  );
};

export default memo(InvitationApp);
