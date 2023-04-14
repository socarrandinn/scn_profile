import { memo } from 'react';
import { TableToolbar, TableToolbarActions } from '@dfl/mui-admin-layout';

const toolbarSetting = {
  actions: {
    create: false,
    filter: false,
    export: false,
  },
};

const ContactListToolbar = () => {
  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={toolbarSetting} />
      </TableToolbar>
    </>
  );
};

export default memo(ContactListToolbar);
