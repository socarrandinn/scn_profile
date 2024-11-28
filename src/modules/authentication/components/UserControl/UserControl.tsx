import { memo } from 'react';
import { useUser } from '@dfl/react-security';
import AuthAppLayout from 'routes/layout/AuthAppLayout';
import { ChangePasswordRequire } from 'modules/security/users/pages';
import { ChildrenProps, PageLoader } from '@dfl/mui-react-common';

const UserControl = ({ children }: ChildrenProps) => {
  const { user } = useUser();

  if (!user) return <PageLoader size={'screen'} />;

  // changePasswordRequire
  if (user?.metadata?.changePasswordRequire) {
    return (
      <AuthAppLayout>
        <ChangePasswordRequire />
      </AuthAppLayout>
    );
  }
  return <>{children}</>;
};

export default memo(UserControl);
