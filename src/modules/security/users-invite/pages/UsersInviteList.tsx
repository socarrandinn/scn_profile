import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import UsersInviteListContainer from 'modules/security/users-invite/containers/UsersInviteListContainer';
import { usersInviteFilters } from 'modules/security/users-invite/constants/users-invite.filters';
import { USER_INVITE_VIEWS } from '../constants/user-invite-tabs-view.constants';

const UsersInviteList = () => {
  const { t } = useTranslation('usersInvite');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'usersInvites'} filters={usersInviteFilters}>
        <FilterViewProvider views={USER_INVITE_VIEWS}>
          <UsersInviteListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(UsersInviteList);
