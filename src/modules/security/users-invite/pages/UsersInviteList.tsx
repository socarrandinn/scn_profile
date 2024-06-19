import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import UsersInviteListContainer from 'modules/security/users-invite/containers/UsersInviteListContainer';
import { usersInviteFilters } from 'modules/security/users-invite/constants/users-invite.filters';

const UsersInviteList = () => {
  const { t } = useTranslation('usersInvite');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'usersInvites'} filters={usersInviteFilters}>
        <UsersInviteListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(UsersInviteList);
