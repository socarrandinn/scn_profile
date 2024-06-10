import { memo } from 'react';
import { UserSummary } from 'modules/security/users/components/UserSummary';
import { UserDetailProvider } from 'modules/security/users/contexts/UserDetail';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ChildrenProps } from '@dfl/mui-react-common';

const UserDetailContainer = ({ children }: ChildrenProps) => (
  <UserDetailProvider>
    <DetailLayout>
      <DetailSummary>
        <UserSummary />
      </DetailSummary>
      <DetailContent ghost>{children}</DetailContent>
    </DetailLayout>
  </UserDetailProvider>
);

export default memo(UserDetailContainer);
