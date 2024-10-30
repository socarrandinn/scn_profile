import { memo } from 'react';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { filters } from 'modules/security/users/constants/filters';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import WarehouseUserListContainer from '../../containers/WarehouseUserListContainer';

const WarehouseUserListPage = () => {
  const { t } = useTranslation('users');
  return (
    <PagePaperLayout mb={3} title={t('userList')}>
      <TableProvider id={'warehouse-users'} filters={filters}>
        <FilterViewProvider views={userViewTabs}>
          <WarehouseUserListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(WarehouseUserListPage);
