/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/18/23
 */
import { memo } from 'react';
import UserDetailsContent from 'modules/account/components/UserDetailsContent/UserDetailsContent';
import { UserSummary } from 'modules/account/components/UserSummary';
import { UserDetailProvider } from 'modules/account/contexts/UserDetail';
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
