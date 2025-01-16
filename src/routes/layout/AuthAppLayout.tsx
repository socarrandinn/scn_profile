import { ChildrenProps, PageLoader } from '@dfl/mui-react-common';
import { AuthLayout } from 'layouts';
import { memo, Suspense } from 'react';

type AuthAppLayoutProps = ChildrenProps & { className?: string };

const AuthAppLayout = ({ children, className }: AuthAppLayoutProps) => {
  return (
    <AuthLayout className={className}>
      <Suspense fallback={<PageLoader size={500} />}>{children}</Suspense>
    </AuthLayout>
  );
};

export default memo(AuthAppLayout);
