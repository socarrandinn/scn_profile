import { memo } from 'react';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { filters } from 'modules/security/users/constants/filters';
import DistributionCenterUserListContainer from '../../containers/DistributionCenterUserListContainer';

const DistributionCenterUserListPage = () => {
  return (
    <TableProvider id={'distribution-center-users'} filters={filters}>
      <FilterViewProvider views={userViewTabs}>
        <DistributionCenterUserListContainer />
      </FilterViewProvider>
    </TableProvider>
  );
};

export default memo(DistributionCenterUserListPage);
