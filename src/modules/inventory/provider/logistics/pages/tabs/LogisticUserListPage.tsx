import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import LogisticUserListContainer from 'modules/inventory/provider/logistics/containers/LogisticUserListContainer';

const LogisticUserListPage = () => {
  return (
    <TableProvider id={'logistic-users'}>
      <LogisticUserListContainer />
    </TableProvider>
  );
};

export default memo(LogisticUserListPage);
