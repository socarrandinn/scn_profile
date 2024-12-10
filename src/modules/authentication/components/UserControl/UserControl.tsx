import { memo } from 'react';
import { useUser } from '@dfl/react-security';
import AuthAppLayout from 'routes/layout/AuthAppLayout';
import { ChildrenProps, PageLoader } from '@dfl/mui-react-common';
import ChangePassword from 'modules/security/users/components/UserSecurityInfo/ChangePassword';

const UserControl = ({ children }: ChildrenProps) => {
  const { user } = useUser();
  if (!user) return <PageLoader size={'screen'} />;

  // changePasswordRequire
  if (user?.security?.requiredChangePassword) {
    return (
      <AuthAppLayout>
        <ChangePassword />
      </AuthAppLayout>
    );
  }
  return <>{children}</>;
};

export default memo(UserControl);
