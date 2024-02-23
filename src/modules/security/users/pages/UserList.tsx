import { memo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { filters } from 'modules/security/users/constants/filters';

const UserList = ({ ...props }: any) => {
  const { t } = useTranslation('users');

  return (
        <PagePaperLayout {...props} title={t('userList')}>
            <TableProvider id={'users'} filters={filters}>
                <FilterViewProvider views={userViewTabs}>
                    <UserListContainer/>
                </FilterViewProvider>
            </TableProvider>
        </PagePaperLayout>
  );
};

export default memo(UserList);
