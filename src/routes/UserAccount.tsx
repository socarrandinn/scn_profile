/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/18/23
 */
import { memo, Suspense } from 'react';
import { PageLoader } from '@dfl/mui-react-common';
import { UserControl } from 'modules/authentication/components/UserControl';
import UserAccount from 'modules/account';

const UserAccountModule = () => {
  return (
    <UserControl>
        <Suspense fallback={<PageLoader />}>
            <UserAccount />
        </Suspense>
    </UserControl>
  );
};

export default memo(UserAccountModule);
