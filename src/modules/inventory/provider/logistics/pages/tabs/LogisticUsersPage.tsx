import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import LogisticUserListContainer from 'modules/inventory/provider/logistics/containers/LogisticUserListContainer';

const LogisticUsersPage = () => {
  const { t } = useTranslation('users');
  return (
    <PagePaperLayout title={t('userList')} sx={{ mt: 0 }}>
      <TableProvider id={'logistic-users'}>
        <LogisticUserListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(LogisticUsersPage);
