import { memo } from 'react';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { filters } from 'modules/security/users/constants/filters';
import UserSystemListContainer from 'modules/security/users/containers/UserSystemListContainer';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';

const UserList = () => {
  const { t } = useTranslation('users');
  return (
    <PagePaperLayout title={t('userList')}>
      <TableProvider id={'users'} filters={filters}>
        <FilterViewProvider views={userViewTabs}>
          <UserSystemListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(UserList);
