import { memo } from 'react';
import { TableToolbar } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { ChildrenProps } from '@dfl/mui-react-common';

const settings: TableHeaderOptions = {
  filter: {
    activeMenu: false,
  },
  actions: {
    export: false,
    create: false,
  },
};

const UserListToolbar = ({ children }: ChildrenProps) => {
  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings}></TableToolbarActions>
      </TableToolbar>
      <GeneralActions>
        {children}
      </GeneralActions>
    </>
  );
};

export default memo(UserListToolbar);
