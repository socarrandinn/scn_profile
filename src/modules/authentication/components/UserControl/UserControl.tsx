import { memo } from 'react';
import { useUser } from '@dfl/react-security';
import { ChildrenProps, PageLoader, ResponsiveDialog } from '@dfl/mui-react-common';
import { MainLayout } from 'layouts';
import { AccountDetailProvider } from 'modules/account/contexts/AccountDetail';
import Onboarding from 'modules/account/pages/Onboarding';

const UserControl = ({ children }: ChildrenProps) => {
  const { user } = useUser();
  if (!user) return <PageLoader size={'screen'} />;

  const isRequiredChangePassword = user?.security?.requiredChangePassword;
  const onboardingCompleted = user?.onboardingCompleted;
  if (!onboardingCompleted || isRequiredChangePassword) {
    return (
      <MainLayout>
        <AccountDetailProvider>
          <ResponsiveDialog open={true}>
            <Onboarding onboardingCompleted={onboardingCompleted} isRequiredChangePassword={isRequiredChangePassword} />
          </ResponsiveDialog>
        </AccountDetailProvider>
      </MainLayout>
    );
  }
  return <>{children}</>;
};

export default memo(UserControl);
