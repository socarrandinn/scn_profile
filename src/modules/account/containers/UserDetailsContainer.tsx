/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/18/23
 */
import { memo } from 'react';
import UserDetailsContent from 'modules/account/components/UserDetailsContent/UserDetailsContent';
import { AccountDetailProvider } from 'modules/account/contexts/AccountDetail';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { AccountSummary } from 'modules/account/components/AccountSummary';

const UserDetailContainer = () => (
  <AccountDetailProvider>
    <DetailLayout>
      <DetailSummary>
        <AccountSummary />
      </DetailSummary>
      <DetailContent ghost>
        <UserDetailsContent />
      </DetailContent>
    </DetailLayout>
  </AccountDetailProvider>
);

export default memo(UserDetailContainer);
