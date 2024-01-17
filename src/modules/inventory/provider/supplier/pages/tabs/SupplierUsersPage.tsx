import { memo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { TableProvider } from '@dfl/mui-admin-layout';
// import SupplierProductListContainer from '../../containers/SupplierProductListContainer';
import SupplierUsersListContainer from '../../containers/SupplierUsersListContainer';
// import { supplierProductTabFilters } from 'modules/inventory/product/constants';

const SupplierUsersPage = () => {
  const { t } = useTranslation('users');
  return (
    <PagePaperLayout title={t('userList')} sx={{ mt: 0 }}>
      <TableProvider id={'supplier-users'} >           {/* Faltan los filtros */}
        <SupplierUsersListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(SupplierUsersPage);
