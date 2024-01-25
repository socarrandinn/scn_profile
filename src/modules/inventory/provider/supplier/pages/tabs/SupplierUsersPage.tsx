import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import SupplierUsersListContainer from '../../containers/SupplierUsersListContainer';

const SupplierUsersPage = () => {
  const { t } = useTranslation('users');
  return (
    <PagePaperLayout title={t('userList')} sx={{ mt: 0 }}>
      <TableProvider id={'supplier-users'} >
        <SupplierUsersListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(SupplierUsersPage);
