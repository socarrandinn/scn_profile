import { memo, useCallback } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import UserListContainer from 'modules/security/users/containers/UserListContainer';
import { TableProvider, FilterViewProvider } from '@dfl/mui-admin-layout';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { filters } from 'modules/security/users/constants/filters';

const UserList = () => {
  const { t } = useTranslation('users');

  return (
    <PagePaperLayout title={t('userList')}>
      <TableProvider id={'users'} filters={filters}>
        <FilterViewProvider views={userViewTabs}>
          <UserListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(UserList);
