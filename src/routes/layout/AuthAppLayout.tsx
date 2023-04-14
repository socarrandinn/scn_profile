import { ChildrenProps, PageLoader } from '@dfl/mui-react-common';
import AuthLayout from 'layouts/AuthLayout';
import { memo, Suspense } from 'react';

type AuthAppLayoutProps = ChildrenProps;

const AuthAppLayout = ({ children }: AuthAppLayoutProps) => {
  return (
    <AuthLayout>
      <Suspense fallback={<PageLoader size={500} />}>{children}</Suspense>
    </AuthLayout>
  );
};

export default memo(AuthAppLayout);
