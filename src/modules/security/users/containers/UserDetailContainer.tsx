import { memo } from 'react';
import UserDetailsContent from 'modules/security/users/components/UserDetailsContent/UserDetailsContent';
import { UserSummary } from 'modules/security/users/components/UserSummary';
import { UserDetailProvider } from 'modules/security/users/contexts/UserDetail';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';

const UserDetailContainer = () => (
  <UserDetailProvider>
    <DetailLayout>
      <DetailSummary>
        <UserSummary />
      </DetailSummary>
      <DetailContent ghost>
        <UserDetailsContent />
      </DetailContent>
    </DetailLayout>
  </UserDetailProvider>
);

export default memo(UserDetailContainer);
